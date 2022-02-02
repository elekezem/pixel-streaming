# PixelStreaming ReactJS for Unreal Engine 5

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
// libs
import PixelStreaming from 'pixel-streaming';

function DemoStream() {

  return (
    <PixelStreaming
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
      <div>Nested content with player context</div>
    </PixelStreaming>
  )
}
```

## Props

| Prop           | Description                                                                                                                                                                                                     |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onProgress     | `function` — Return progress in percentage based on `secondsToStart`                                                                                                                                            |
| onRestart      | //                                                                                                                                                                                                              |
| onLoad         | `function` — When the stream started                                                                                                                                                                            |
| secondsToStart | `int` — Approximate stream start time in seconds                                                                                                                                                                |
| host           | String host to url with signal server.<br/>If host starts wih`https` then it will be used `wss` <br/>Otherwise starts with `http` then will be used `ws`<br/>Example: `https://uuid1234567890.streamdomain.com` |
| port           | `int` — port of signal server, default `80`                                                                                                                                                                     |
| children       | `node` — All child elements inherit context from the library                                                                                                                                                    |

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Pixel Streaming](https://docs.unrealengine.com/5.0/en-US) - Library for Unreal Engine.
- [Styled Jss](https://www.npmjs.com/package/styled-jss) - Styled Components on top of JSS
- 
