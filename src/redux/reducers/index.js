import { combineReducers } from 'redux'
import infoReducer from './info'
import selectReducer from './select'

const reducers = combineReducers({
    info: infoReducer,
    select: selectReducer
})

export default reducers