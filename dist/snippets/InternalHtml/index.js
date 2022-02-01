"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("../../styles");

require("./section.module.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// styles
// css
const RootDiv = _styles.styled.div(theme => ({
  width: 500,
  visibility: 'hidden',
  position: 'absolute',
  pointerEvents: 'none'
}));

const DebugPanel = props => {
  const renderDebug = () => {
    return /*#__PURE__*/_react.default.createElement("div", {
      id: "overlaySettings"
    }, /*#__PURE__*/_react.default.createElement("div", {
      id: "KickOthers"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "settings-text"
    }, "Kick all other players"), /*#__PURE__*/_react.default.createElement("label", {
      className: "btn-overlay"
    }, /*#__PURE__*/_react.default.createElement("input", {
      readOnly: true,
      type: "button",
      id: "kick-other-players-button",
      className: "overlay-button btn-flat",
      value: "Kick"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      id: "FillWindow"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "settings-text"
    }, "Enlarge Display to Fill Window"), /*#__PURE__*/_react.default.createElement("label", {
      className: "tgl-switch"
    }, /*#__PURE__*/_react.default.createElement("input", {
      readOnly: true,
      type: "checkbox",
      id: "enlarge-display-to-fill-window-tgl",
      className: "tgl tgl-flat",
      checked: true
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "tgl-slider"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      id: "QualityControlOwnership"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "settings-text"
    }, "Quality control ownership"), /*#__PURE__*/_react.default.createElement("label", {
      className: "tgl-switch"
    }, /*#__PURE__*/_react.default.createElement("input", {
      readOnly: true,
      type: "checkbox",
      id: "quality-control-ownership-tgl",
      className: "tgl tgl-flat"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "tgl-slider"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      id: "EncoderSettings"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "settings-text"
    }, "Encoder Settings"), /*#__PURE__*/_react.default.createElement("div", {
      id: "encoderParamsContainer",
      className: "collapse"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "encoder-rate-control",
      className: "settings-text"
    }, "Rate Control"), /*#__PURE__*/_react.default.createElement("select", {
      id: "encoder-rate-control",
      defaultValue: "CBR"
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: "CBR"
    }, "CBR"), /*#__PURE__*/_react.default.createElement("option", {
      value: "VBR"
    }, "VBR"), /*#__PURE__*/_react.default.createElement("option", {
      value: "ConstQP"
    }, "ConstQP")), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "encoder-target-bitrate-text"
    }, "Target Bitrate (kbps)"), /*#__PURE__*/_react.default.createElement("input", {
      readOnly: true,
      type: "number",
      className: "form-control",
      id: "encoder-target-bitrate-text",
      value: "0",
      min: "0",
      max: "100000"
    }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "encoder-max-bitrate-text"
    }, "Max Bitrate (kbps)"), /*#__PURE__*/_react.default.createElement("input", {
      readOnly: true,
      type: "number",
      className: "form-control",
      id: "encoder-max-bitrate-text",
      value: "0",
      min: "0",
      max: "100000"
    }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "encoder-min-qp-text"
    }, "Min QP"), /*#__PURE__*/_react.default.createElement("input", {
      readOnly: true,
      type: "number",
      className: "form-control",
      id: "encoder-min-qp-text",
      value: "0",
      min: "0",
      max: "999"
    }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "encoder-max-qp-text"
    }, "Max QP"), /*#__PURE__*/_react.default.createElement("input", {
      readOnly: true,
      type: "number",
      className: "form-control",
      id: "encoder-max-qp-text",
      value: "0",
      min: "0",
      max: "999"
    }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", {
      className: "settings-text"
    }, "Filler Data"), /*#__PURE__*/_react.default.createElement("label", {
      className: "tgl-switch"
    }, /*#__PURE__*/_react.default.createElement("input", {
      readOnly: true,
      type: "checkbox",
      id: "encoder-filler-data-tgl",
      className: "tgl tgl-flat"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "tgl-slider"
    })), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "encoder-multipass",
      className: "settings-text"
    }, "Multipass"), /*#__PURE__*/_react.default.createElement("select", {
      id: "encoder-multipass",
      defaultValue: "DISABLED"
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: "DISABLED"
    }, "DISABLED"), /*#__PURE__*/_react.default.createElement("option", {
      value: "QUARTER"
    }, "QUARTER"), /*#__PURE__*/_react.default.createElement("option", {
      value: "FULL"
    }, "FULL")), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
      readOnly: true,
      id: "encoder-params-submit",
      className: "btn btn-primary btn-lg mt-3",
      type: "button",
      value: "Apply"
    })))), /*#__PURE__*/_react.default.createElement("div", {
      id: "WebRTCSettings"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "settings-text"
    }, "WebRTC Settings"), /*#__PURE__*/_react.default.createElement("div", {
      id: "webrtcParamsContainer",
      className: "collapse"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "webrtc-degradation-pref"
    }, "Degradation Pref"), /*#__PURE__*/_react.default.createElement("select", {
      id: "webrtc-degradation-pref"
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: "BALANCED"
    }, "BALANCED"), /*#__PURE__*/_react.default.createElement("option", {
      value: "MAINTAIN_FRAMERATE"
    }, "MAINTAIN_FRAMERATE"), /*#__PURE__*/_react.default.createElement("option", {
      value: "MAINTAIN_RESOLUTION"
    }, "MAINTAIN_RESOLUTION")), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "webrtc-max-fps-text"
    }, "Max FPS"), /*#__PURE__*/_react.default.createElement("input", {
      readOnly: true,
      type: "number",
      className: "form-control",
      id: "webrtc-max-fps-text",
      value: "1",
      min: "1",
      max: "999"
    }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "webrtc-min-bitrate-text"
    }, "Min Bitrate (kbps)"), /*#__PURE__*/_react.default.createElement("input", {
      readOnly: true,
      type: "number",
      className: "form-control",
      id: "webrtc-min-bitrate-text",
      value: "0",
      min: "0",
      max: "100000"
    }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "webrtc-max-bitrate-text"
    }, "Max Bitrate (kbps)"), /*#__PURE__*/_react.default.createElement("input", {
      readOnly: true,
      type: "number",
      className: "form-control",
      id: "webrtc-max-bitrate-text",
      value: "0",
      min: "0",
      max: "100000"
    }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "webrtc-low-qp-text"
    }, "Low QP Threshold"), /*#__PURE__*/_react.default.createElement("input", {
      readOnly: true,
      type: "number",
      className: "form-control",
      id: "webrtc-low-qp-text",
      value: "0",
      min: "0",
      max: "999"
    }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "webrtc-high-qp-text"
    }, "High QP Threshold"), /*#__PURE__*/_react.default.createElement("input", {
      readOnly: true,
      type: "number",
      className: "form-control",
      id: "webrtc-high-qp-text",
      value: "0",
      min: "0",
      max: "999"
    }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
      readOnly: true,
      id: "webrtc-params-submit",
      className: "btn btn-primary btn-lg mt-3",
      type: "button",
      value: "Apply"
    })))), /*#__PURE__*/_react.default.createElement("div", {
      id: "ShowFPS"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "settings-text"
    }, "Show FPS"), /*#__PURE__*/_react.default.createElement("label", {
      className: "btn-overlay"
    }, /*#__PURE__*/_react.default.createElement("input", {
      readOnly: true,
      type: "button",
      id: "show-fps-button",
      className: "overlay-button btn-flat",
      value: "Toggle"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      id: "MatchViewportResolution"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "settings-text"
    }, "Match Viewport Resolution"), /*#__PURE__*/_react.default.createElement("label", {
      className: "tgl-switch"
    }, /*#__PURE__*/_react.default.createElement("input", {
      readOnly: true,
      type: "checkbox",
      id: "match-viewport-res-tgl",
      className: "tgl tgl-flat"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "tgl-slider"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      id: "Stats"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "settings-text"
    }, "Show Stats"), /*#__PURE__*/_react.default.createElement("label", {
      className: "tgl-switch"
    }, /*#__PURE__*/_react.default.createElement("input", {
      readOnly: true,
      type: "checkbox",
      id: "show-stats-tgl",
      className: "tgl tgl-flat",
      checked: true
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "tgl-slider"
    })), /*#__PURE__*/_react.default.createElement("div", {
      id: "statsContainer",
      className: "statsContainer"
    }, /*#__PURE__*/_react.default.createElement("div", {
      id: "stats",
      className: "stats"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      id: "LatencyTest"
    }, /*#__PURE__*/_react.default.createElement("button", {
      onClick: () => {// logic.player.cls.sendStartLatencyTest()
      }
    }, "Test Latency"), /*#__PURE__*/_react.default.createElement("div", {
      id: "LatencyStatsContainer",
      className: "statsContainer"
    }, /*#__PURE__*/_react.default.createElement("div", {
      id: "LatencyStats",
      className: "stats"
    }, "No stats yet..."))));
  };

  return /*#__PURE__*/_react.default.createElement(RootDiv, null, /*#__PURE__*/_react.default.createElement("div", {
    id: "playerUI"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "overlay",
    className: "overlay text-light bg-dark"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    id: "qualityStatus",
    className: "greyStatus"
  }, "\u25CF"), /*#__PURE__*/_react.default.createElement("div", {
    id: "overlayButton"
  }, "+")), renderDebug())));
};

var _default = DebugPanel;
exports.default = _default;