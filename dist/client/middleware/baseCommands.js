"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const isDev = _config.default.isDev;

class BaseCommands {
  constructor() {}

  emitConsole(commands) {
    let delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    const emitNot = () => {
      commands.forEach((command, i) => {
        this.emit({
          type: 'console_command',
          value: {
            command
          }
        });
      });
    };

    if (!this.timeout_console) {
      emitNot();
      this.timeout_console = true;
      return;
    }

    clearTimeout(this.timeout_console);
    this.timeout_console = setTimeout(() => {
      emitNot();
      clearTimeout(this.timeout_console);
    }, 1000 * delay);
  } // Limit fps


  setFps() {
    let value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
    this.emitConsole(["t.maxfps ".concat(value)], 5);
  } // Reset bitrate to maximum (each 5 seconds)


  resetBitrate() {
    this.emitConsole(['PixelStreaming.Encoder.MaxBitrate 0'], 5);
  } // Set control of quality to actual frontend stream


  resetPrioritiseQuality() {
    this.emitConsole(['Streamer.PrioritiseQuality'], 5);
  }

  resize() {
    let multiplier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    // multiplier = 1
    const max_size = {
      width: 2388,
      height: 1428
    }; // Apply window size

    function resizeResolution(srcWidth, srcHeight, maxWidth, maxHeight) {
      let multiplier = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      srcWidth = srcWidth * multiplier;
      srcHeight = srcHeight * multiplier;

      if (srcWidth > maxWidth || srcHeight > maxHeight) {
        return max_size;
      } // const ratio = Math.min(newWidth / srcWidth, newHeight / srcHeight);
      // console.warn('aspected', { width: srcWidth*ratio, height: srcHeight*ratio })


      return {
        width: Math.round(srcWidth),
        height: Math.round(srcHeight)
      };
    }

    const {
      width,
      height
    } = resizeResolution(window.innerWidth, window.innerHeight, max_size.width, max_size.height, multiplier);
    clearTimeout(this.resize_timeout);
    this.resize_timeout = setTimeout(() => {
      this.emitConsole(["PixelStreaming.Capturer.UseBackBufferSize 0", "PixelStreaming.Capturer.CaptureSize ".concat(width, "x").concat(height), "r.SetRes ".concat(width, "x").concat(height, "f")]);
    }, 1000);
  }

}

var _default = BaseCommands;
exports.default = _default;