import { advertismentConstants } from "../constants/advertisment.constants";

export function getAdvertisments_request(advertisments) {
    return {
        type: advertismentConstants.GETADVERTISMETS_REQUEST,
        payload: advertisments
    }
}

export function getAdvertisments_success(advertisments) {
    return {
        type: advertismentConstants.GETADVERTISMETS_SUCCESS,
        payload: advertisments
    }
}

export function getAdvertisments_failure(error) {
    return {
        type: advertismentConstants.GETADVERTISMETS_FAILURE,
        payload: error
    }
}