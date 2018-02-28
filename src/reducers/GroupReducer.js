const GROUP_LOADED = '@@portfolio/GROUP_LOADED'

export function groupLoaded(id, data) {
  return { type: GROUP_LOADED, id, data }
}

const initialState = {}

export default function groupReducer (state = initialState, action) {
  switch (action.type) {
    case GROUP_LOADED:
      const newState = Object.assign({}, state, { [action.id]: action.data })
      return newState
    default:
      return state
  }
}
