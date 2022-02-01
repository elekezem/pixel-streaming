/* Usage

***** wrapper
// context
import ContextProvider from './context/';

return (
	<ContextProvider>
		{children...}
	</ContextProvider>
)

***** injection
// context
import {UsePS} from './context/';

const PS = UsePS()

*/


import React from "react";
import PSProvider, {UsePS} from './UsePS/';

function ContextProvider(props) {
  return (
    <PSProvider>
      {props.children}
    </PSProvider>
  )
}

export {
  UsePS,
}

export default ContextProvider
