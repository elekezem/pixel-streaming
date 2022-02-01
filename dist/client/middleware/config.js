"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// import {env} from 'api/'
const Config = new class {
  constructor() {
    this.isDev = false;
    this.app_key = '__ps__';
    this.callback_key = '__ps__callback__';
    this.projectDir = 'estate';
  } // get stream() {
  //   return {
  //     withSsl: true,
  //     // host: 'ps-stream.estate3d.com'
  //   };
  // }


}();
var _default = Config;
exports.default = _default;