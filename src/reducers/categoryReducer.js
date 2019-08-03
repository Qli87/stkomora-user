import { categoryConstants } from '../constants/category.constants'

const initialState = {
    categoties: []
}

export default function newsReducer(state = initialState, action) {
    switch(action.type) {
        case categoryConstants.GETCATEGORIES_REQUEST:

            return {
                ...state,
                loading: true,
                categoties: []
            }
        case categoryConstants.GETCATEGORIES_SUCCESS:

            return {
                ...state,
                loading: false,
                categoties: action.payload
            }
        case categoryConstants.GETCATEGORIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}