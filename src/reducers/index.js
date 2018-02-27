import { combineReducers } from 'redux'
import HardList from 'reducers/HardListReducer'
import Champions from 'reducers/ChampionsReducer'
import Game from 'reducers/GameReducer'
import Groups from 'reducers/GroupsReducer'
import Group from 'reducers/GroupReducer'

const reducers = combineReducers({
  HardList,
  Champions,
  Game,
  Groups,
  Group,
})

export default reducers
