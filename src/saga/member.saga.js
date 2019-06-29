import { takeEvery, put, call} from 'redux-saga/effects'
import { getMembers_failure, getMembers_success } from '../actions/member.actions'
import  { memberConstant } from '../constants/member.constants'
import { getMembers_api } from '../api/members.api'

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

export function* memberSaga() {
    yield takeEvery(memberConstant.GETMEMBERS_REQUEST, getMembers)
}