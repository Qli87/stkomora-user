import { all } from 'redux-saga/effects'
import { memberSaga } from './member.saga'
import { newsSaga} from './news.saga'
import { categoriesSaga } from './category.saga';
import { advertismentSaga } from './advertisment.saga'

export default function* rootSaga() {
    yield all ([
        memberSaga(),
        newsSaga(),
        categoriesSaga(),
        advertismentSaga()
    ])
}
