# PixelStreaming ReactJS for Unreal Engine 5

Library for launching the player for Pixel Streaming (Unreal Engine v.5)
Connects to running [STUN and TURN Servers](https://docs.unrealengine.com/4.27/en-US/SharingAndReleasing/PixelStreaming/Hosting/).

## Documentation

https://markolofsen.github.io/unrealos_doc/

## Demo

https://unrealos.com/streams/demo/

## Installation

```bash
$ yarn add pixel-streaming
```

## Usage

```javascript
import React from 'react';

// libs
import PixelStreaming, {DebugData} from 'pixel-streaming';

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

      }}
      onLoad={() => {
        console.error('loaded!');
      }}
      secondsToStart={300}
      host='https://uuid1234567890.streamdomain.com'
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
| children       | `node` — All child elements inherit context from the library                                                                                                                                             |
| ref            | Reference to object<br/>Use `data-click` attribute for clickable UI elements over stream.<                                                                                                               |

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
 type: 'string',
 value: 'any',
 verification_id: undefined,
})
```

## Attention!

- Apply style `pointerEvents: 'none'` to all JSX elements that overlap the stream.

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Pixel Streaming](https://docs.unrealengine.com/5.0/en-US) - Library for Unreal Engine.
- [Styled Jss](https://www.npmjs.com/package/styled-jss) - Styled Components on top of JSS



---

**Use with pleasure!**
[UnrealOS.com](http://unrealos.com/) Team
