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

export function getBoardMembers_request(members) {
    return {
        type: memberConstant.GETBOARDMEMBERS_REQUEST,
        payload: members
    }
}

export function getBoardMembers_success(members) {
    return {
        type: memberConstant.GETBOARDMEMBERS_SUCCESS,
        payload: members
    }
}

export function getBoardMembers_failure(error) {
    return {
        type: memberConstant.GETBOARDMEMBERS_FAILURE,
        payload: error
    }
}

export function getBiography_request(member) {
    return {
        type: memberConstant.GETBIOGRAPHY_REQUEST,
        payload: member
    }
}

export function getBiography_success(member) {
    return {
        type: memberConstant.GETBIOGRAPHY_SUCCESS,
        payload: member
    }
}

export function getBiography_failure(error) {
    return {
        type: memberConstant.GETBIOGRAPHY_FAILURE,
        payload: error
    }
}

// pg
export function getMembersPg_request(members) {
    return {
        type: memberConstant.GETMEMBERSPG_REQUEST,
        payload: members
    }
}

export function getMembersPg_success(members) {
    return {
        type: memberConstant.GETMEMBERSPG_SUCCESS,
        payload: members
    }
}

export function getMembersPg_failure(error) {
    return {
        type: memberConstant.GETMEMBERSPG_FAILURE,
        payload: error
    }
}

//nk
export function getMembersNk_request(members) {
    return {
        type: memberConstant.GETMEMBERSNK_REQUEST,
        payload: members
    }
}

export function getMemberNk_success(members) {
    return {
        type: memberConstant.GETMEMBERSNK_SUCCESS,
        payload: members
    }
}

export function getMembersNk_failure(error) {
    return {
        type: memberConstant.GETMEMBERSNK_FAILURE,
        payload: error
    }
}

//ct
export function getMembersCt_request(members) {
    return {
        type: memberConstant.GETMEMBERSCT_REQUEST,
        payload: members
    }
}

export function getMembersCt_success(members) {
    return {
        type: memberConstant.GETMEMBERSCT_SUCCESS,
        payload: members
    }
}

export function getMembersCt_failure(error) {
    return {
        type: memberConstant.GETMEMBERSCT_FAILURE,
        payload: error
    }
}


//south
export function getMembersSouth_request(members) {
    return {
        type: memberConstant.GETMEMBERSSOUTH_REQUEST,
        payload: members
    }
}

export function getMembersSouth_success(members) {
    return {
        type: memberConstant.GETMEMBERSSOUTH_SUCCESS,
        payload: members
    }
}

export function getMembersSouth_failure(error) {
    return {
        type: memberConstant.GETMEMBERSSOUTH_FAILURE,
        payload: error
    }
}

//north
export function getMembersNorth_request(members) {
    return {
        type: memberConstant.GETMEMBERSNORTH_REQUEST,
        payload: members
    }
}

export function getMembersNorth_success(members) {
    return {
        type: memberConstant.GETMEMBERSNORTH_SUCCESS,
        payload: members
    }
}

export function getMembersNorth_failure(error) {
    return {
        type: memberConstant.GETMEMBERSNORTH_FAILURE,
        payload: error
    }
}