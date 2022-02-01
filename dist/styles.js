"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styled = exports.media = exports.css = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _styledJss = _interopRequireDefault(require("styled-jss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// libs
const styled = new class {
  constructor() {
    this.styled = (obj, cb) => {
      return (0, _styledJss.default)(obj)(cb());
    };
  }

  ul(cb) {
    return this.styled('ul', cb);
  }

  ol(cb) {
    return this.styled('ol', cb);
  }

  div(cb) {
    return this.styled('div', cb);
  }

  custom(obj, cb) {
    return this.styled(obj, cb);
  }

}(); // const styled = (obj, cb) => styled_(obj)(({ theme }) => cb(theme))

/* Usage styled:
import {styled} from 'styles/snippets'

const RootList = styled.ul(theme => ({
  backgroundColor: 'red',
}))
*/

exports.styled = styled;
const css = new class {
  constructor() {}

  makeRadius() {
    const radius = 10;
    let res = [];

    for (var _len = arguments.length, payload = new Array(_len), _key = 0; _key < _len; _key++) {
      payload[_key] = arguments[_key];
    }

    for (let i of payload) {
      if (i === 'auto') i = radius;
      res.push(i);
    }

    if (res.length > 0) {
      return res.map(item => item + 'px').join(' ');
    }

    return radius;
  }

}();
exports.css = css;
const media = new class {
  /*
  Usage in css:
   root: {
    [media.down.sm]: {
      height: 28,
    },
  },
  */
  constructor() {
    this.min = int => "@media (min-width: ".concat(int, "px)");

    this.max = int => "@media (max-width: ".concat(int, "px)");
  } // {xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536}


  get down() {
    return {
      xs: this.max(600),
      sm: this.max(900),
      md: this.max(1200),
      lg: this.max(1536) // xl: this.max(1536),

    };
  }

  get up() {
    return {
      xs: this.min(0),
      sm: this.min(600),
      md: this.min(900),
      lg: this.min(1200),
      xl: this.max(1536)
    };
  }

}(); // const colors = {
//   primary: color_primary,
// }

exports.media = media;