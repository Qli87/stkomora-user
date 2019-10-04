import { homePageConstants } from '../constants/homePage.constants'

const initialState = {
    details: ''
}

export default function homePageReducer(state = initialState, action) {
    switch(action.type) {
        case homePageConstants.GETDETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case homePageConstants.GETDETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                details: action.payload
            }
        case homePageConstants.GETDETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}