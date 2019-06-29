import { memberConstant } from '../constants/member.constants'


export function getMembers_request(members) {
    return {
        type: memberConstant.GETMEMBERS_REQUEST,
        payload: members
    }
}

export function getMembers_success(members) {
    return {
        type: memberConstant.GETMEMBERS_SUCCESS,
        payload: members
    }
}

export function getMembers_failure(error) {
    return {
        type: memberConstant.GETMEMBERS_FAILURE,
        payload: error
    }
}

