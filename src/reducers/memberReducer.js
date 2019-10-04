import { memberConstant } from '../constants/member.constants'

const initialState = {
    members: [],
    boardMembers: [],
    memberDetails: [],
    membersPg: [],
    membersNk: [],
    membersCt: [],
    membersSouth: [],
    membersNorth: []
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
        case memberConstant.GETBOARDMEMBERS_REQUEST:
            return {
                ...state,
                loading: true,
                // boardMembers: action.payload
                memberDetails: [],
                boardMembers: []
            }
        case memberConstant.GETBOARDMEMBERS_SUCCESS:
            return {
                ...state,
                loading: false,
                memberDetails: state.memberDetails,
                boardMembers: action.payload
            }
        case memberConstant.GETBOARDMEMBERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case memberConstant.GETBIOGRAPHY_REQUEST:
            return {
                ...state,
                loading: true,
                memberDetails: []
            }
        case memberConstant.GETBIOGRAPHY_SUCCESS:
            return {
                ...state,
                loading: false,
                memberDetails: action.payload,
                boardMembers: state.boardMembers
            }
        case memberConstant.GETBIOGRAPHY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case memberConstant.GETMEMBERSCT_REQUEST:
            return {
                ...state,
                loading: true,
                membersCt: []
            }
        case memberConstant.GETMEMBERSCT_SUCCESS:
            return {
                ...state,
                loading: false,
                membersCt: action.payload
            }
        case memberConstant.GETMEMBERSCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case memberConstant.GETMEMBERSPG_REQUEST:
                return {
                    ...state,
                    loading: true,
                    membersPg: []
                }
        case memberConstant.GETMEMBERSPG_SUCCESS:
            return {
                ...state,
                loading: false,
                membersPg: action.payload
            }
        case memberConstant.GETMEMBERSPG_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case memberConstant.GETMEMBERSNK_REQUEST:
                return {
                    ...state,
                    loading: true,
                    membersNk: []
                }
        case memberConstant.GETMEMBERSNK_SUCCESS:
            return {
                ...state,
                loading: false,
                membersNk: action.payload
            }
        case memberConstant.GETMEMBERSNK_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case memberConstant.GETMEMBERSSOUTH_REQUEST:
            return {
                ...state,
                loading: true,
                membersSouth: []
            }
        case memberConstant.GETMEMBERSSOUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                membersSouth: action.payload
            }
        case memberConstant.GETMEMBERSSOUTH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case memberConstant.GETMEMBERSNORTH_REQUEST:
            return {
                ...state,
                loading: true,
                membersNorth: []
            }
        case memberConstant.GETMEMBERSNORTH_SUCCESS:
            return {
                ...state,
                loading: false,
                membersNorth: action.payload
            }
        case memberConstant.GETMEMBERSNORTH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }    
        default:
            return state
    }
}

