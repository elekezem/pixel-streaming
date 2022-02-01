# PixelStreaming ReactJS for Unreal Engine 5

https://docs.unrealengine.com/5.0/en-US/

### Documentation

https://markolofsen.github.io/unrealos_doc/

### Demo

https://unrealos.com/streams/demo/


```bash
$ yarn add pixel-streaming
```

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
        // alert('!')
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
