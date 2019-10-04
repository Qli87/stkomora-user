import { call, put, takeEvery } from 'redux-saga/effects'
import { homePageConstants } from '../constants/homePage.constants'
import { getDetails_api } from '../api/homePage.api'
import { getDetails_failure, getDetails_success } from '../actions/homePage.action'

export function* getDetails() {
    const response = yield call(getDetails_api)
    if(!response || !response.data) {
        return yield put(getDetails_failure('Internal server error for loading content for home page'))
    }
    if(response.status === 200) {   
        return yield put(getDetails_success(response.data))
    } else {
        return yield put(getDetails_failure('IError for loading content for home page'))
    }
}


export function* homePageSaga() {
    yield takeEvery(homePageConstants.GETDETAILS_REQUEST, getDetails)
}