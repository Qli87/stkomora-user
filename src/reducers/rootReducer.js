import { combineReducers }  from 'redux'
import memberReducer from './memberReducer'
import newsReducer from './newsReducer'
import categoryReducer from './categoryReducer'
import advertismentReducer from './advertismentReducer'
import companyDetailsReducer from './companyDetailsReducer'

export default combineReducers({
    memberReducer,
    newsReducer,
    categoryReducer,
    advertismentReducer,
    companyDetailsReducer
})