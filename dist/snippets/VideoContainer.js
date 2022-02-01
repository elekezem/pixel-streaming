"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _context = require("../context/");

var _styles = require("../styles");

var _InternalHtml = _interopRequireDefault(require("./InternalHtml/"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// context
// styles
// snippets
const VideoTag = _styles.styled.div(theme => ({
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

const VideoContainer = props => {
  return /*#__PURE__*/_react.default.createElement(_context.ContextProvider, null, /*#__PURE__*/_react.default.createElement(_InternalHtml.default, null), /*#__PURE__*/_react.default.createElement(VideoTag, {
    id: "player"
  }), props.children);
};

var _default = VideoContainer;
exports.default = _default;