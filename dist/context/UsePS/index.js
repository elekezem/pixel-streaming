"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UsePS = void 0;

var _react = _interopRequireDefault(require("react"));

var _actions = _interopRequireDefault(require("./actions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Context = /*#__PURE__*/_react.default.createContext();

const UsePS = () => _react.default.useContext(Context); // classes


exports.UsePS = UsePS;

const Provider = props => {
  const payload = (0, _actions.default)();
  return /*#__PURE__*/_react.default.createElement(Context.Provider, {
    value: payload
  }, props.children);
};

var _default = Provider;
exports.default = _default;