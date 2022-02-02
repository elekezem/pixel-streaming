import React from 'react';

import PixelStreaming, {DebugData} from "./lib/";
import "./App.css";


function App() {

  const refPixelStreaming = React.useRef(null)
  const [printState, setPrintState] = React.useState(false)

  const refreshState = () => {
    setPrintState(refPixelStreaming.current.state)
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
      host='https://i-0c3fc447b626b1d07.cloudvec.com'
      port={80} >
        <div>
          <DebugData show style={{maxWidth: 300, backgroundColor: 'rgba(0,0,0,.2)'}} />
          <br />
          <button data-click onClick={() => emit.testCommand(11)}>
            Send command
          </button>
          <br />
          <button data-click onClick={refreshState}>
            Refresh state
          </button>
          <br />
          {printState && <pre>{JSON.stringify(printState, null, 4)}</pre>}
        </div>
    </PixelStreaming>
  )
}

export default App
