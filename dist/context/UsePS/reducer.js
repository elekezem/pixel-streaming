"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const defaultState = {
  users_count: 0,
  loaded: false,
  connect: false,
  error: false,
  closed: false,
  // not_available: false,
  // extra....
  callback_loading: false,
  callback_caller: false
};

const initialState = _objectSpread(_objectSpread({}, defaultState), {}, {
  stream_config: false,
  mouse_moving: false,
  aggregated_stats: false,
  window_size: {
    width: 0,
    height: 0
  },
  resolution_multiplier: 1.5,
  // from .5 to 2
  quality_speed: false,
  last_interaction: null
});

const KEY = {
  UPDATE: 'UPDATE'
};

function reducer(state, action) {
  const {
    type,
    payload: anValue
  } = action; // console.log(state);

  if (type === KEY.UPDATE) {
    return _objectSpread(_objectSpread({}, state), anValue);
  }

  return state;
}

var _default = {
  defaultState,
  initialState,
  KEY,
  reducer
};
exports.default = _default;