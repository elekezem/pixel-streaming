import React from 'react';

import PixelStreaming, {DebugData} from "./lib/";
import "./App.css";


function App() {

  const refPixelStreaming = React.useRef(null)

  const printState = () => {
    const data = refPixelStreaming.current.state
    console.warn('State', data);
  }

  const emit = new class {
    emit(type, value, verification_id=undefined) {
      refPixelStreaming.current.emit({type, value, verification_id})
    }
    testCommand(value) {
      this.emit('test_command_type', value)
    }
  }


  return (
    <PixelStreaming
      ref={refPixelStreaming}
      onProgress={({percentage}) => {
        console.error({percentage});
      }}
      onRestart={() => {
        // ...
      }}
      onLoad={() => {
        console.error('loaded!');
      }}
      secondsToStart={300}
      host='https://i-0df115be76ac3acf4.cloudvec.com'
      port={80} >
        <div>
          <DebugData show />
          <br />
          <button onClick={() => emit.testCommand(11)}>
            Send command
          </button>
          <br />
          <button onClick={printState}>
            Print state
          </button>
        </div>
    </PixelStreaming>
  )
}

export default App
