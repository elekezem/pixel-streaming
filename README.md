# PixelStreaming for ReactJS

Library for launching the player for Pixel Streaming (Unreal Engine v.5)

Connects to running [STUN and TURN Servers](https://docs.unrealengine.com/4.27/en-US/SharingAndReleasing/PixelStreaming/Hosting/).

---

**Documentation:** https://markolofsen.github.io/unrealos_doc/

**Demo:** https://unrealos.com/streams/demo/

## Installation

```bash
npm install pixel-streaming
# or
yarn add pixel-streaming
```

## Usage

```javascript
import React from 'react';

// libs
import PixelStreaming, {DebugData} from 'pixel-streaming';

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
```

## Props

| Prop           | Description                                                                                                                                                                                              |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onProgress     | `function` — Return progress in percentage based on `secondsToStart`                                                                                                                                     |
| onRestart      | `function` — Called when the stream is restarted                                                                                                                                                         |
| onLoad         | `function` — When the stream started                                                                                                                                                                     |
| secondsToStart | `int` — Approximate stream start time in seconds                                                                                                                                                         |
| host           | String host to url with signal server.<br/>If host starts wih`https` then it will be used `wss` <br/>If starts with `http` then will be used `ws`<br/>Example: `https://uuid1234567890.streamdomain.com` |
| port           | `int` — port of signal server, default `80`                                                                                                                                                              |
| children       | `function` — Children element with inner data (`{({state}) => (...)}`)                                                                                                                                   |
| ref            | Reference to object                                                                                                                                                                                      |

## Reference object data

##### refPixelStreaming.current.state

| Variable              | Default                 | Description |
| --------------------- | ----------------------- | ----------- |
| aggregated_stats      | `false`                 |             |
| callback_caller       | `false`                 |             |
| callback_loading      | `false`                 |             |
| closed                | `false`                 |             |
| connect               | `false`                 |             |
| error                 | `false`                 |             |
| last_interaction      | `null`                  |             |
| loaded                | `false`                 |             |
| mouse_moving          | `false`                 |             |
| quality_speed         | `false`                 |             |
| resolution_multiplier | `1.5`                   |             |
| stream_config         | `false`                 |             |
| users_count           | `0`                     |             |
| window_size           | `{width: 0, height: 0}` |             |

##### refPixelStreaming.current.emit(...)

```javascript
refPixelStreaming.current.emit({
 type: 'string', //key of command
 value: 0, //string, bool, number
 verification_id: undefined, //server response with execute command by verification id
})
```

## Attention!

- React v.`17.0.2`

- Apply style `pointerEvents: 'none'` to all JSX elements that overlap the stream.

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Unreal Engine Pixel Streaming](https://docs.unrealengine.com/5.0/en-US) - Library for Unreal Engine.
- [Styled Jss](https://www.npmjs.com/package/styled-jss) - Styled Components on top of JSS

---

**Use with pleasure!**

[UnrealOS.com](http://unrealos.com/) Team
