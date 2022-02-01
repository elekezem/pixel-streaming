import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import PixelStreaming from "./lib/";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

export { PixelStreaming };
