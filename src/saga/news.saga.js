import { takeEvery, put, call} from 'redux-saga/effects'
import { getNews_api, getNoveltyDetails_api, getNewsForCategory_api } from '../api/news.api'
import { getNews_failure, getNews_success, getNoveltyDetails_failure, getNoveltyDetails_success, getNewsForCategory_failure, getNewsForCategory_success} from '../actions/news.actions'
import { newsConstants } from '../constants/news.constants';

export function* getNews() {
    const response = yield call(getNews_api)
    if(!response || !response.data) {
        return yield put(getNews_failure('Internal server error for get news'))
    }
    if(response.status === 200) {
        return yield put(getNews_success(response.data))
    } else {
        return yield put(getNews_failure('Error for get news'))
    }
}

export function* getNoveltyDetails() {
    const response = yield call(getNoveltyDetails_api)
    if(!response || !response.data) {
        return yield put(getNoveltyDetails_failure('Internal server error for get novelty details'))
    }
    if(response.status === 200) {
        return yield put(getNoveltyDetails_success(response.data))
    } else {
        return yield put(getNoveltyDetails_failure('Internal server error for get novelty details'))
    }
}

export function* getNewsForCateogry() {
    const response = yield call(getNewsForCategory_api)
    if(!response || !response.data) {
        return yield put(getNewsForCategory_failure('Internal server error for get novelty details'))
    }
    if(response.status === 200) {
        return yield put(getNewsForCategory_success(response.data))
    } else {
        return yield put(getNewsForCategory_failure('Internal server error for get novelty details'))
    }
}


export function* newsSaga() {
    yield takeEvery(newsConstants.GETNEWS_REQUEST, getNews)
    yield takeEvery(newsConstants.GETNOVELTYDETAILS_REQUEST, getNoveltyDetails)
    yield takeEvery(newsConstants.GETNEWSFORCATEGORY_REQUEST, getNewsForCateogry)
}