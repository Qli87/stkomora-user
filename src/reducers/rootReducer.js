import { combineReducers }  from 'redux'
import memberReducer from './memberReducer'
import newsReducer from './newsReducer'
import categoryReducer from './categoryReducer'
import advertismentReducer from './advertismentReducer'

export default combineReducers({
    memberReducer,
    newsReducer,
    categoryReducer,
    advertismentReducer
})