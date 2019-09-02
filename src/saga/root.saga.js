import { all } from 'redux-saga/effects'
import { memberSaga } from './member.saga'
import { newsSaga} from './news.saga'
import { categoriesSaga } from './category.saga';
import { advertismentSaga } from './advertisment.saga'
import { companyDetailsSaga } from './companyDetails.saga';
import { aboutSaga } from './about.saga'

export default function* rootSaga() {
    yield all ([
        memberSaga(),
        newsSaga(),
        categoriesSaga(),
        advertismentSaga(),
        companyDetailsSaga(),
        aboutSaga()
    ])
}
