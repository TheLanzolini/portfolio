import { combineReducers } from 'redux'
import HardList from './HardListReducer'
import Champions from './ChampionsReducer'

const reducers = combineReducers({
  HardList,
  Champions,
})

export default reducers
