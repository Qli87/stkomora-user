import { aboutConstants } from "../constants/about.constants";

export function getAboutContent_request(content) {
    return {
        type: aboutConstants.GETABOUTCONTENT_REQUEST,
        payload: content
    }
}
export function getAboutContent_success(content) {
    return {
        type: aboutConstants.GETABOUTCONTENT_SUCCESS,
        payload: content
    }
}
export function getAboutContent_failure(error) {
    return {
        type: aboutConstants.GETABOUTCONTENT_REQUEST,
        payload: error
    }
}
