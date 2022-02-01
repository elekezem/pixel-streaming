import PixelStreaming from "./lib/";
import "./App.css";


function App() {

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
      host='https://i-0f2302964982f9a0d.cloudvec.com'
      port={80} >
      <div>Nested content with player context</div>
    </PixelStreaming>
  )
}

export default App
