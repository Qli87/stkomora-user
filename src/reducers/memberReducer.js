import { memberConstant } from '../constants/member.constants'

const initialState = {
    members: []
}


export default function memberReducer(state = initialState, action) {
    switch(action.type) {
        case memberConstant.GETMEMBERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case memberConstant.GETMEMBERS_SUCCESS:
            return {
                ...state,
                loading: false,
                members: action.payload
            }
        case memberConstant.GETMEMBERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

