import { takeEvery, put, call} from 'redux-saga/effects'
import { getCategories_api } from '../api/categories.api';
import { getCategories_failure, getCategories_success } from '../actions/category.action';
import { categoryConstants } from '../constants/category.constants';

export function* getCategories() {
    const response = yield call(getCategories_api)
    if(!response || !response.data) {
        return yield put(getCategories_failure('Internal server error for loading categories'))
    }
    if(response.status === 200) {
        return yield put(getCategories_success(response.data))
    } else {
        return yield put(getCategories_failure('Error for loading categories'))
    }
}

export function* categoriesSaga() {
    yield takeEvery(categoryConstants.GETCATEGORIES_REQUEST, getCategories)
}