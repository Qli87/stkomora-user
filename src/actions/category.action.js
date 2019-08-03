import { categoryConstants } from '../constants/category.constants'

export function getCategories_request(categories) {
    return {
        type: categoryConstants.GETCATEGORIES_REQUEST,
        payload: categories
    }
}

export function getCategories_success(categories) {
    return {
        type: categoryConstants.GETCATEGORIES_SUCCESS,
        payload: categories
    }
}

export function getCategories_failure(error) {
    return {
        type: categoryConstants.GETCATEGORIES_FAILURE,
        payload: error
    }
}