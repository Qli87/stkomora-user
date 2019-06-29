import { takeEvery, put, call} from 'redux-saga/effects'
import { getNews_api } from '../api/news.api'
import { getNews_failure, getNews_success } from '../actions/news.actions'
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


export function* newsSaga() {
    yield takeEvery(newsConstants.GETNEWS_REQUEST, getNews)
}