"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// libs
function useCountdown(props) {
  const refInterval = _react.default.useRef(null);

  const [value, setValue] = _react.default.useState(0);

  _react.default.useEffect(() => {
    startCountdown();
    return () => {
      clearInterval(refInterval.current);
    };
  }, []);

  _react.default.useEffect(() => {
    props.onProgress({
      percentage: value
    });
  }, [value]);

  const startCountdown = () => {
    if (!props.seconds) return;
    clearInterval(refInterval.current);
    setValue(0);
    const startTime = (0, _moment.default)();
    const targetTime = startTime.add(props.seconds, 'seconds');

    const relDiff = (a, b) => Math.round((a - b) / a * 100);

    clearInterval(refInterval.current);
    refInterval.current = setInterval(() => {
      const totalSeconds = props.seconds; //moment.duration(targetTime.diff(startTime)).asSeconds();

      const leftSeconds = _moment.default.duration(targetTime.diff((0, _moment.default)())).asSeconds();

      const percentage = relDiff(totalSeconds, leftSeconds); // console.error('='.repeat(30));
      // console.error('totalSeconds', totalSeconds);
      // console.error('leftSeconds', leftSeconds);
      // console.error('percentage', percentage);

      if (percentage >= 100) {
        clearInterval(refInterval.current);
        setValue(100);
        return;
      }

      setValue(percentage);
    }, 100);
  };

  const cls = new class {
    constructor() {}

    stop() {
      clearInterval(refInterval.current);
      setValue(100);
    }

  }();
  return cls;
}

;
useCountdown.propTypes = {
  seconds: _propTypes.default.number.isRequired,
  onProgress: _propTypes.default.func.isRequired
};
useCountdown.defaultProps = {
  seconds: undefined,
  onProgress: () => {}
};
var _default = useCountdown;
exports.default = _default;