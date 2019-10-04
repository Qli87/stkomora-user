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

export function getNoveltyDetails_request(novelty) {
    return {
        type: newsConstants.GETNOVELTYDETAILS_REQUEST,
        payload: novelty
    }
}

export function getNoveltyDetails_success(novelty) {
    return {
        type: newsConstants.GETNOVELTYDETAILS_SUCCESS,
        payload: novelty
    }
}

export function getNoveltyDetails_failure(error) {
    return {
        type: newsConstants.GETNOVELTYDETAILS_FAILURE,
        payload: error
    }
}

export function getNewsForCategory_request(news) {
    return {
        type: newsConstants.GETNEWSFORCATEGORY_REQUEST,
        payload: news
    }
}

export function getNewsForCategory_success(news) {
    return {
        type: newsConstants.GETNEWSFORCATEGORY_SUCCESS,
        payload: news
    }
}

export function getNewsForCategory_failure(news) {
    return {
        type: newsConstants.GETNEWSFORCATEGORY_FAILURE,
        payload: news
    }
}

export function getNewsForFooter_request(news) {
    return {
        type: newsConstants.GETNEWSFORFOOTER_REQUEST,
        payload: news
    }
}

export function getNewsForFooter_success(news) {
    return {
        type: newsConstants.GETNEWSFORFOOTER_SUCCESS,
        payload: news
    }
}

export function getNewsForFooter_failure(error) {
    return {
        type: newsConstants.GETNEWSFORFOOTER_FAILURE,
        payload: error
    }
}