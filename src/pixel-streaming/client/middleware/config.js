// import {env} from 'api/'

const Config = new class {
  constructor() {
    this.isDev = false
    this.app_key = '__ps__'
    this.callback_key = '__ps__callback__'
    this.projectDir = 'estate'
  }

  // get stream() {
  //   return {
  //     withSsl: true,
  //     // host: 'ps-stream.estate3d.com'
  //   };
  // }
}

export default Config
