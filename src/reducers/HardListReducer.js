const HARDLIST_ADD = '@@portfolio/HARDlIST_ADD'
const HARDLIST_REMOVE = '@@portfolio/HARDLIST_REMOVE'
const HARDLIST_TOGGLE_COMPLETE = '@@portfolio/HARDLIST_TOGGLE_COMPLETE'

export function hardListAdd(name) {
  return { type: HARDLIST_ADD, name }
}

export function hardListRemove(name) {
  return { type: HARDLIST_REMOVE, name }
}

export function hardListToggle(name) {
  return { type: HARDLIST_TOGGLE_COMPLETE, name }
}

const initialState = {
  items: [],
}

export default function hardListReducer (state = initialState, action) {
  switch (action.type) {
    case HARDLIST_ADD:
      const newState = Object.assign({}, state)
      newState.items = [...state.items, { name: action.name, complete: false }]
      return newState
    case HARDLIST_REMOVE:
      const neState = { items: state.items.filter(item => item.name !== action.name) }
      return neState
    case HARDLIST_TOGGLE_COMPLETE:
      const nState = Object.assign({}, state)
      nState.items.forEach(item => {
        if (item.name === action.name) {
          item.complete = !item.complete
        }
      })
      return nState
    default:
      return state
  }
}
