import { advertismentConstants } from "../constants/advertisment.constants";

const initialState = {
    advertisments: []
}

export default function advertismentReducer(state = initialState, action) {
    switch(action.type) {
        case advertismentConstants.GETADVERTISMETS_REQUEST:
            return {
                ...state,
                loading: true,
                advertisments: []
            }
        case advertismentConstants.GETADVERTISMETS_SUCCESS:
            return {
                ...state,
                loading: false,
                advertisments: action.payload
            }
        case advertismentConstants.GETADVERTISMETS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}