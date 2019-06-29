import { combineReducers }  from 'redux'
import memberReducer from './memberReducer'
import newsReducer from './newsReducer'

export default combineReducers({
    memberReducer,
    newsReducer
})