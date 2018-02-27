const GROUPS_LOADED = '@@portfolio/GROUPS_LOADED'

export function groupsLoaded(data) {
  return { type: GROUPS_LOADED, data }
}

const initialState = {}

export default function groupsReducer (state = initialState, action) {
  switch (action.type) {
    case GROUPS_LOADED:
      const newState = Object.assign({}, state, action.data)
      return newState
    default:
      return state
  }
}
