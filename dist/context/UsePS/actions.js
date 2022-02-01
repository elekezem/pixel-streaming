"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

var _react = _interopRequireDefault(require("react"));

var _hooks = require("../../hooks/");

var _reducer = _interopRequireDefault(require("./reducer"));

var _client = _interopRequireDefault(require("../../client/"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const {
  defaultState
} = _reducer.default; // pixel streaming

const actions = () => {
  const windowSize = (0, _hooks.useWindowSize)();

  const [state, dispatch] = _react.default.useReducer(_reducer.default.reducer, _reducer.default.initialState);

  const DISPATCHER = payload => dispatch({
    type: _reducer.default.KEY.UPDATE,
    payload
  }); // Resizing window


  _react.default.useEffect(() => {
    if (state.window_size.width !== windowSize.width || state.window_size.height !== windowSize.height) {
      DISPATCHER({
        window_size: windowSize
      });

      _client.default.resize(state.resolution_multiplier);
    }
  }, [windowSize]); // Init original pixel streaming module


  const cls = new class {
    constructor() {
      this.client = _client.default;
    }

    init(_ref) {
      let {
        host,
        port,
        onRestart
      } = _ref;
      this.client.init({
        onUserCount: count => {
          DISPATCHER({
            users_count: count
          });
        },
        onCallback: detail => {// // Update state from click on stream
          // if(detail?.caller === 'stream') {
          //
          //   const newItem = {
          //     key: detail.type,
          //     caller: detail.caller,
          //     value: detail.payload.value,
          //   }
          //
          //   console.error('@@callback', newItem);
          //
          //   dispatch.commands.updateItem(newItem)
          //   DISPATCHER({callback_caller: 'stream'})
          //
          // }
        },
        onLoad: stream_config => {
          console.warn('::onLoad');
          DISPATCHER(_objectSpread(_objectSpread({}, defaultState), {}, {
            loaded: true,
            stream_config
          })); // renewIntercation()
        },
        onConnect: () => {
          console.warn('::onConnect');
          DISPATCHER(_objectSpread(_objectSpread({}, defaultState), {}, {
            connect: true
          }));
        },
        onError: _ref2 => {
          let {
            code,
            reason
          } = _ref2;
          console.warn('::onError', {
            code,
            reason
          });
          DISPATCHER({
            error: {
              code,
              reason
            }
          });
        },
        onClose: async _ref3 => {
          let {
            code,
            reason
          } = _ref3;
          console.warn('::onClose', {
            code,
            reason
          });
          DISPATCHER(_objectSpread(_objectSpread({}, defaultState), {}, {
            closed: {
              code,
              reason
            },
            loaded: false
          }));

          if (code === 4000) {
            // stream server closed
            await onRestart();
          }
        },
        onMouseMove: mouse_moving => {
          DISPATCHER({
            mouse_moving
          }); // renewIntercation()
        },
        onAggregatedStats: aggregated_stats => {
          DISPATCHER({
            aggregated_stats
          });
        },
        onQuality: quality_speed => {
          DISPATCHER({
            quality_speed
          });
        },
        // onWarnTimeout: () => {
        //
        // },
        // onCloseTimeout: () => {
        //
        // },
        credentials: {
          host,
          port,
          warnTimeout: 120,
          closeTimeout: 10,
          lockMouse: false,
          autoPlay: true
        }
      });
    }

    changeQuality(resolution_multiplier) {
      this.client.resize(resolution_multiplier);
      DISPATCHER({
        resolution_multiplier
      });
      console.error('@resolution_multiplier', resolution_multiplier);
    }

  }();
  return {
    state,
    cls
  };
};

var _default = actions;
exports.default = _default;