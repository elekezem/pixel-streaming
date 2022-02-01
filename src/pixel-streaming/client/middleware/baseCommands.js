import Config from './config'
const isDev = Config.isDev

class BaseCommands {
  constructor() {
  }


  emitConsole(commands, delay=1) {

    const emitNot = () => {
      commands.forEach((command, i) => {
        this.emit({type: 'console_command', value: { command }})
      });
    }

    if(!this.timeout_console) {
      emitNot()
      this.timeout_console = true
      return ;
    }

    clearTimeout(this.timeout_console)

    this.timeout_console = setTimeout(() => {
      emitNot()
      clearTimeout(this.timeout_console)
    }, 1000 * delay)
  }


  // Limit fps
  setFps(value=30) {
    this.emitConsole([`t.maxfps ${value}`], 5)
  }

  // Reset bitrate to maximum (each 5 seconds)
  resetBitrate() {
    this.emitConsole(['PixelStreaming.Encoder.MaxBitrate 0'], 5)
  }

  // Set control of quality to actual frontend stream
  resetPrioritiseQuality() {
    this.emitConsole(['Streamer.PrioritiseQuality'], 5)
  }

  resize(multiplier=1) {

    // multiplier = 1

    const max_size = {width: 2388, height: 1428}

    // Apply window size
		function resizeResolution(srcWidth, srcHeight, maxWidth, maxHeight, multiplier=1) {
		  srcWidth = srcWidth * multiplier
		  srcHeight = srcHeight * multiplier

      if(srcWidth > maxWidth || srcHeight > maxHeight) {
        return max_size
      }

		  // const ratio = Math.min(newWidth / srcWidth, newHeight / srcHeight);
		  // console.warn('aspected', { width: srcWidth*ratio, height: srcHeight*ratio })

		  return { width: Math.round(srcWidth), height: Math.round(srcHeight) }
		}

    const {width, height} = resizeResolution(
			window.innerWidth,
			window.innerHeight,
			max_size.width,
			max_size.height,
			multiplier,
		)

    clearTimeout(this.resize_timeout)
    this.resize_timeout = setTimeout(() => {

      this.emitConsole([
        `PixelStreaming.Capturer.UseBackBufferSize 0`,
        `PixelStreaming.Capturer.CaptureSize ${width}x${height}`,
        `r.SetRes ${width}x${height}f`,
      ])

    }, 1000)

  }
}

export default BaseCommands
