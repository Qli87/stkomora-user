import { takeEvery, put, call} from 'redux-saga/effects'
import { getAdvertisments_api } from '../api/advertisments.api';
import { getAdvertisments_failure, getAdvertisments_success } from '../actions/advertisment.action';
import { advertismentConstants } from '../constants/advertisment.constants';

export function* getAdvertisments() {
    const response = yield call(getAdvertisments_api)
    if(!response || !response.data) {
        return yield put(getAdvertisments_failure('Internal server error for loading advertismetns'))
    }
    if(response.status === 200) {
        return yield put(getAdvertisments_success(response.data))
    } else {
        return yield put(getAdvertisments_failure('Error for loading advertismetns'))
    }
}

export function* advertismentSaga() {
    yield takeEvery(advertismentConstants.GETADVERTISMETS_REQUEST, getAdvertisments)
}