import React from 'react';

// libs
// import PixelStreaming from './pixel-streaming/';
import PixelStreaming from 'pixel-streaming-2';
// import {Box} from 'pixel-streaming-2';


function DemoStream() {


  // console.error('PixelStreaming', PixelStreaming());
  // return (<div className="123">demo</div>);
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
      host='https://i-0628bae0bf8679571.cloudvec.com'
      port={80} >
      <div>Nested content with player context</div>
    </PixelStreaming>
  )
}

export default DemoStream
