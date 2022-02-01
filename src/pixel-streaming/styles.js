// libs
import styled_ from 'styled-jss'


export const styled = new class {
  constructor() {
    this.styled = (obj, cb) => {
      return styled_(obj)(cb())
    }
  }
  ul(cb) { return this.styled('ul', cb); }
  ol(cb) { return this.styled('ol', cb); }
  div(cb) { return this.styled('div', cb); }

  custom(obj, cb) { return this.styled(obj, cb); }
}

// const styled = (obj, cb) => styled_(obj)(({ theme }) => cb(theme))

/* Usage styled:
import {styled} from 'styles/snippets'

const RootList = styled.ul(theme => ({
  backgroundColor: 'red',
}))
*/

export const css = new class {
  constructor() {}

  makeRadius(...payload) {
    const radius = 10
    let res = []
    for(let i of payload) {
      if(i === 'auto') i = radius
      res.push(i)
    }
    if(res.length > 0) { return res.map(item => item+'px').join(' '); }
    return radius;
  }


}

export const media = new class {

  /*
  Usage in css:

  root: {
    [media.down.sm]: {
      height: 28,
    },
  },
  */

  constructor() {
    this.min = (int) => `@media (min-width: ${int}px)`
    this.max = (int) => `@media (max-width: ${int}px)`
  }

  // {xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536}

  get down() {
    return {
      xs: this.max(600),
      sm: this.max(900),
      md: this.max(1200),
      lg: this.max(1536),
      // xl: this.max(1536),
    };
  }
  get up() {
    return {
      xs: this.min(0),
      sm: this.min(600),
      md: this.min(900),
      lg: this.min(1200),
      xl: this.max(1536),
    };
  }
}

// const colors = {
//   primary: color_primary,
// }
