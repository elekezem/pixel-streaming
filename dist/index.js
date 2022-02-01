"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = _interopRequireWildcard(require("./context/"));

var _hooks = require("./hooks/");

var _styles = require("./styles");

var _InternalHtml = _interopRequireDefault(require("./snippets/InternalHtml/"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// context
// hooks
// styles
// snippets
const VideoContainer = _styles.styled.div(theme => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: 'hidden',
  '& > video': {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    backgroundSize: 'cover'
  }
}));

const ModuleRoot = props => {
  const PS = (0, _context.UsePS)();
  const Countdown = (0, _hooks.useCountdown)({
    seconds: props.secondsToStart,
    onProgress: payload => props.onProgress(payload)
  });

  _react.default.useEffect(() => {
    PS.cls.init({
      host: props.host,
      port: props.port,
      onRestart: () => props.onRestart()
    });
  }, []);

  _react.default.useEffect(() => {
    props.onLoad();
    Countdown.stop();
  }, [PS.state.loaded]);

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_InternalHtml.default, null), /*#__PURE__*/_react.default.createElement(VideoContainer, {
    id: "player"
  }), props.children);
};

ModuleRoot.propTypes = {
  host: _propTypes.default.string.isRequired,
  port: _propTypes.default.number.isRequired,
  onRestart: _propTypes.default.func,
  onLoad: _propTypes.default.func,
  secondsToStart: _propTypes.default.number.isRequired
};
ModuleRoot.defaultProps = {
  onRestart: () => {},
  onLoad: () => {},
  onProgress: () => {},
  secondsToStart: 0
};

const ContextRoot = props => /*#__PURE__*/_react.default.createElement(_context.default, null, /*#__PURE__*/_react.default.createElement(ModuleRoot, props));

var _default = ContextRoot;
exports.default = _default;