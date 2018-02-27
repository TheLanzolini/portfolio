const GAME_LOADED = '@@portfolio/GAME_LOADED'

export function gameLoaded(data) {
  console.log('123123', data)
  return { type: GAME_LOADED, data }
}

const initialState = {}

export default function gameReducer (state = initialState, action) {
  switch (action.type) {
    case GAME_LOADED:
      console.log(action)
      const newState = Object.assign({}, state, action.data)
      return newState
    default:
      return state
  }
}
