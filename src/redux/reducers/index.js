import { combineReducers } from 'redux'
import infoReducer from './info'

const reducers = combineReducers({
    info: infoReducer
})

export default reducers