import { newsConstants } from '../constants/news.constants'

export function getNews_request(news) {
    return {
        type: newsConstants.GETNEWS_REQUEST,
        payload: news
    }
}

export function getNews_success(news) {
    return {
        type: newsConstants.GETNEWS_SUCCESS,
        payload: news
    }
}

export function getNews_failure(error) {
    return {
        type: newsConstants.GETNEWS_FAILURE,
        payload: error
    }
}