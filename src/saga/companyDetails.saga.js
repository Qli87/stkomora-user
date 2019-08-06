import { takeEvery, put, call} from 'redux-saga/effects'
import { getCompanyDetails_api } from '../api/companyDetails.api';
import { getCompanyDetails_failure, getCompanyDetails_success } from '../actions/companyDetails.action';
import { companyDetailsCostants } from '../constants/companyDetails.constants';

export function* getDetails() {
    const response = yield call(getCompanyDetails_api)
    if(!response || !response.data) {
        return yield put(getCompanyDetails_failure('Internal server error for loading company details'))
    }
    if(response.status === 200){
        return yield put(getCompanyDetails_success(response.data))
    } else {
        return yield put(getCompanyDetails_failure('Error for loading company details'))
    }
}

export function* companyDetailsSaga() {
    yield takeEvery(companyDetailsCostants.GETCOMPANTYDETAILS_REQUEST, getDetails)
}