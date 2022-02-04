import React from "react"

// hooks
import {useWindowSize} from '../../hooks/'

// // reducers
import reducer from './reducer'
const {defaultState} = reducer

// pixel streaming
import ClientClass from '../../client/'



const actions = () => {
  const windowSize = useWindowSize();

  const [state, dispatch] = React.useReducer(reducer.reducer, reducer.initialState);

  const DISPATCHER = (payload) => dispatch({
    type: reducer.KEY.UPDATE,
    payload,
  })

  // Resizing window
  React.useEffect(() => {

    if(
      state.window_size.width !== windowSize.width ||
      state.window_size.height !== windowSize.height
    ) {
      DISPATCHER({window_size: windowSize})
      ClientClass.resize(state.resolution_multiplier)
    }

  }, [windowSize])


  // Init original pixel streaming module
  const cls = new class {

    constructor() {
      this.client = ClientClass
    }

    init({host, port, onRestart, onCallback, onLoad, onConnect, onError, onClose}) {
      this.client.init({
        onUserCount: (count) => {
          DISPATCHER({users_count: count})
        },
        onCallback: (detail) => {

          onCallback(detail)

          // // Update state from click on stream
          // if(detail?.caller === 'stream') {
          //
          //   const newItem = {
          //     key: detail.type,
          //     caller: detail.caller,
          //     value: detail.payload.value,
          //   }
          //
          //   console.error('@@callback', newItem);
          //
          //   dispatch.commands.updateItem(newItem)
          //   DISPATCHER({callback_caller: 'stream'})
          //
          // }
        },
        onLoad: (stream_config) => {
          console.warn('::onLoad');
          DISPATCHER({...defaultState, loaded: true, stream_config})

          onLoad(stream_config)
          // renewIntercation()
        },
        onConnect: () => {
          console.warn('::onConnect');
          DISPATCHER({...defaultState, connect: true})

          onConnect()
        },
        onError: ({code, reason}) => {
          console.warn('::onError', {code, reason});
          DISPATCHER({error: {code, reason}})

          onError({code, reason})
        },
        onClose: async ({code, reason}) => {
          console.warn('::onClose', {code, reason});

          DISPATCHER({
            ...defaultState,
            closed: {code, reason},
            loaded: false,
          })

          if(code === 4000) { // stream server closed
            await onRestart()
    			}

          onClose()
        },
        onMouseMove: (mouse_moving) => {
          DISPATCHER({mouse_moving})
          // renewIntercation()
        },
        onAggregatedStats: (aggregated_stats) => {
          DISPATCHER({aggregated_stats})
        },
        onQuality: (quality_speed) => {
          DISPATCHER({quality_speed})
        },
        // onWarnTimeout: () => {
        //
        // },
        // onCloseTimeout: () => {
        //
        // },
        credentials: {
          host,
          port,
          warnTimeout: 120,
          closeTimeout: 10,
          lockMouse: false,
          autoPlay: true,
        },
      })

    }

    changeQuality(resolution_multiplier) {
      this.client.resize(resolution_multiplier)
      DISPATCHER({resolution_multiplier})
      console.error('@resolution_multiplier', resolution_multiplier);
    }

  }

  return {
    state,
    cls,
  }
};

export default actions
