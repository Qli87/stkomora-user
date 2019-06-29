import { newsConstants } from '../constants/news.constants' 

const initialState = {
    news: []
}

export default function newsReducer(state = initialState, action) {
    switch(action.type) {
        case newsConstants.GETNEWS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case newsConstants.GETNEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                news: action.payload
            }
        case newsConstants.GETNEWS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}