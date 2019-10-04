import { takeEvery, put, call} from 'redux-saga/effects'
import { getMembers_failure, getMembers_success, getBoardMembers_failure, getBoardMembers_success, getBiography_failure, getBiography_success, getMembersCt_failure, getMembersCt_success, getMembersPg_failure, getMembersPg_success, getMembersNk_failure, getMemberNk_success, getMembersSouth_failure, getMembersSouth_success, getMembersNorth_failure, getMembersNorth_success } from '../actions/member.actions'
import  { memberConstant } from '../constants/member.constants'
import { getMembers_api, getBoardMembers_api, getBiography_api, getMembersCt_api, getMembersPg_api, getMembersNk_api, getMembersSouth_api, getMembersNorth_api } from '../api/members.api'

export function* getMembers() {
    const response = yield call(getMembers_api)
    if(!response || !response.data) {
        return yield put(getMembers_failure('Internal server error for loading members'))
    }
    if(response.status === 200) {
        return yield put(getMembers_success(response.data))
    } else {
        return yield put(getMembers_failure('Error for getMembers'))
    }
}

export function* getBoardMembers() {
    const response = yield call(getBoardMembers_api)
    if(!response || !response.data) {
        return yield put(getBoardMembers_failure('Internal server error for loading board members'))
    }
    if(response.status === 200) {
        return yield put(getBoardMembers_success(response.data))
    } else {
        return yield put(getBoardMembers_failure('Error for loading board members'))
    }
}

export function* getBiography(action) {
    const response = yield call(getBiography_api, action.payload)
    if(!response || !response.data) {
        return yield put(getBiography_failure('Internal server error for loading biography'))
    }
    if(response.status === 200) {
        return yield put(getBiography_success(response.data))
    } else {
        return yield put(getBiography_failure('Error for loading biography'))
    }
}


export function* getMembersPg() {
    const response = yield call(getMembersPg_api)
    if(!response || !response.data) {
        return yield put(getMembersPg_failure('Internal server error for loading members from pg'))
    }    
    if(response.status === 200) {
        return yield put(getMembersPg_success(response.data))
    } else {
        return yield put(getMembersPg_failure('Error for loading members from pg'))
    }
}

export function* getMembersNk() {
    const response = yield call(getMembersNk_api)
    if(!response || !response.data) {
        return yield put(getMembersNk_failure('Internal server error for loading members from nk'))
    }    
    if(response.status === 200) {
        return yield put(getMemberNk_success(response.data))
    } else {
        return yield put(getMembersNk_failure('Error for loading members from nk'))
    }
}

export function* getMembersCt() {
    const response = yield call(getMembersCt_api)
    if(!response || !response.data) {
        return yield put(getMembersCt_failure('Internal server error for loading ct members'))
    }    
    if(response.status === 200) {
        return yield put(getMembersCt_success(response.data))
    } else {
        return yield put(getMembersCt_failure('Error for loading ct members'))
    }
}

export function* getMembersSouth() {
    const response = yield call(getMembersSouth_api)
    if(!response || !response.data) {
        return yield put(getMembersSouth_failure('Internal server error for loading south region members'))
    }    
    if(response.status === 200) {
        return yield put(getMembersSouth_success(response.data))
    } else {
        return yield put(getMembersSouth_failure('Error for loading south region members'))
    }
}

export function* getMembersNorth() {
    const response = yield call(getMembersNorth_api)
    if(!response || !response.data) {
        return yield put(getMembersNorth_failure('Internal server error for loading memners from north'))
    }    
    if(response.status === 200) {
        return yield put(getMembersNorth_success(response.data))
    } else {
        return yield put(getMembersNorth_failure('Error for loading memners from north'))
    }
}

export function* memberSaga() {
    yield takeEvery(memberConstant.GETMEMBERS_REQUEST, getMembers)
    yield takeEvery(memberConstant.GETBOARDMEMBERS_REQUEST, getBoardMembers)
    yield takeEvery(memberConstant.GETBIOGRAPHY_REQUEST, getBiography)
    yield takeEvery(memberConstant.GETMEMBERSCT_REQUEST, getMembersCt)
    yield takeEvery(memberConstant.GETMEMBERSPG_REQUEST, getMembersPg)
    yield takeEvery(memberConstant.GETMEMBERSNK_REQUEST, getMembersNk)
    yield takeEvery(memberConstant.GETMEMBERSSOUTH_REQUEST, getMembersSouth)
    yield takeEvery(memberConstant.GETMEMBERSNORTH_REQUEST, getMembersNorth)
}