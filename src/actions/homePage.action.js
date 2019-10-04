import { homePageConstants } from '../constants/homePage.constants'

export function getDetails_request(content) {
    return {
        type: homePageConstants.GETDETAILS_REQUEST,
        payload: content
    }
}
export function getDetails_success(content) {
    return {
        type: homePageConstants.GETDETAILS_SUCCESS,
        payload: content
    }
}
export function getDetails_failure(error) {
    return {
        type: homePageConstants.GETDETAILS_FAILURE,
        payload: error
    }
}
