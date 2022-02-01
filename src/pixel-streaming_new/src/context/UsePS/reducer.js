const defaultState = {
  users_count: 0,
  loaded: false,
  connect: false,
  error: false,
  closed: false,
  // not_available: false,

  // extra....
  callback_loading: false,
  callback_caller: false,
};

const initialState = {
  ...defaultState,
  stream_config: false,
  mouse_moving: false,
  aggregated_stats: false,
  window_size: {width: 0, height: 0},
  resolution_multiplier: 1.5, // from .5 to 2
  quality_speed: false,
  last_interaction: null,
};

const KEY = {
  UPDATE: 'UPDATE',
}


function reducer(state, action) {
  const { type, payload: anValue } = action;
  // console.log(state);

  if(type === KEY.UPDATE) {
    return { ...state, ...anValue };
  }

  return state;
}


export default {
  defaultState,
  initialState,
  KEY,
  reducer,
}
