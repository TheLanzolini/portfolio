import { combineReducers } from 'redux'
import HardList from 'reducers/HardListReducer'
import Champions from 'reducers/ChampionsReducer'

const reducers = combineReducers({
  HardList,
  Champions,
})

export default reducers
