import React from 'react';

import PixelStreaming, {DebugData} from "./lib/";
import "./App.css";


function App() {
  const refPixelStreaming = React.useRef(null)

  const actionClass = new class {
    constructor() {
      this.ref = refPixelStreaming.current
    }

    _emit(type, value, verification_id=undefined) {
      this.ref.emit({type, value, verification_id})
    }

    emitTestCommand(value) {
      this._emit('test_command_type', value)
    }
  }


  return (
    <PixelStreaming
      ref={refPixelStreaming}

      onLoad={(payload) => {
        console.warn('loaded', payload);
      }}
      onConnect={() => {
        console.warn('connected');
      }}
      onRestart={() => {
        // ...
      }}
      onError={({code, reason}) => {
        console.error('error', {code, reason});
      }}
      onClose={({code, reason}) => {
        console.error('closed', {code, reason});
      }}
      onCallback={(payload => {
        console.warn('callback', payload);
      })}
      onProgress={({percentage}) => {
        console.warn('progress', {percentage});
      }}
      secondsToStart={300}
      host='https://i-0c3fc447b626b1d07.cloudvec.com'
      port={80} >
      {({state}) => (
        <div>
          <DebugData
            show
            style={{maxWidth: 300, backgroundColor: 'rgba(0,0,0,.2)'}}
          />

          <br />
          <button onClick={() => actionClass.emitTestCommand(11)}>
            Test command
          </button>

          <br />
          {<pre>{JSON.stringify(state, null, 4)}</pre>}
        </div>
      )}
    </PixelStreaming>
  )
}

export default App
