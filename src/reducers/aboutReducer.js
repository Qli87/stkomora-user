import { aboutConstants } from "../constants/about.constants";

const initialState = {
    content: ''
}

export default function aboutReducer(state = initialState, action) {
    switch(action.type) {
        case aboutConstants.GETABOUTCONTENT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case aboutConstants.GETABOUTCONTENT_SUCCESS:
            return {
                ...state,
                loading: false,
                content: action.payload
            }
        case aboutConstants.GETABOUTCONTENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}