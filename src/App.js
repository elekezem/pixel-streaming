import React from 'react';

import PixelStreaming, {DebugData} from "./lib/";
import "./App.css";


function App() {
  const refPixelStreaming = React.useRef(null)
  const [serverData, setServerData] = React.useState({host: 'http://127.0.0.1', port: 80})

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
    <div>

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
        onError={(payload) => {
          console.error('error', payload);
        }}
        onClose={(payload) => {
          console.error('closed', payload);
        }}
        onCallback={(payload => {
          console.warn('callback', payload);
        })}
        onProgress={(payload) => {
          console.warn('progress', payload);
        }}
        secondsToStart={300}
        autoConnect={false}
        host={serverData.host}
        port={serverData.port} >
        {({state, setConnection}) => (
          <div>

            <form onSubmit={(event) => {
              event.preventDefault()
              event.stopPropagation()

              setConnection()
            }}>
              <input type="text" placeholder="http://127.0.0.1" value={serverData.host} onChange={(event) => setServerData(c => ({
                ...c, host: event.target.value
              }))} />
              <input type="number" placeholder="80" value={serverData.port} onChange={(event) => setServerData(c => ({
                ...c, port: event.target.value
              }))} />
              <button type="submit">Connect</button>
            </form>

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
    </div>
  )
}

export default App
