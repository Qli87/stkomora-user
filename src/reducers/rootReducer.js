import { combineReducers }  from 'redux'
import memberReducer from './memberReducer'
import newsReducer from './newsReducer'
import categoryReducer from './categoryReducer'
import advertismentReducer from './advertismentReducer'
import companyDetailsReducer from './companyDetailsReducer'
import aboutReducer from './aboutReducer'
import homePageReducer from './homePageReducer'

export default combineReducers({
    memberReducer,
    newsReducer,
    categoryReducer,
    advertismentReducer,
    companyDetailsReducer,
    aboutReducer,
    homePageReducer
})