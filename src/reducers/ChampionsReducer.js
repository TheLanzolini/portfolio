const CHAMPIONS_LOADED = '@@portfolio/CHAMPIONS_LOADED'

export function championsLoaded(data) {
  return { type: CHAMPIONS_LOADED, data }
}

const initialState = {}

export default function championsReducer (state = initialState, action) {
  switch (action.type) {
    case CHAMPIONS_LOADED:
      const newState = Object.assign({}, state, action.data)
      return newState
    default:
      return state
  }
}
