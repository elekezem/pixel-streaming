"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.reverse.js");

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Message = new class {
  constructor() {
    this.isDev = _config.default.isDev;
    this.showFunc = true;
    this.showWebrtc = false;
  }

  get webrtc() {
    if (!this.showWebrtc || this.isDev) {
      return {
        log: () => {},
        info: () => {},
        error: () => {},
        warn: () => {}
      };
    }

    return this;
  }

  divider() {
    let n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';
    let r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
    if (!this.isDev) return;
    console.warn(n.repeat(r));
  }

  _block(type) {
    if (!this.isDev) return;
    const n = '#';
    const pre = [n.repeat(5), ' '.repeat(5)];
    this.divider(n, 100);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    this[type](...pre, ...args, ...pre.reverse());
    this.divider(n, 100);
  }

  block() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    this._block('warn', ...args);
  }

  blockError() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    this._block('error', ...args);
  }

  func() {
    if (!this.isDev || !this.showFunc) return; // console.warn('*'.repeat(30));
    // console.warn('func:', ...args)
  }

  log() {
    if (!this.isDev) return;
    console.log(...arguments);
  }

  warn() {
    if (!this.isDev) return;
    console.warn(...arguments);
  }

  info() {
    if (!this.isDev) return;
    console.info(...arguments);
  }

  error() {
    if (!this.isDev) return;
    console.error(...arguments);
  }

}();
var _default = Message;
exports.default = _default;