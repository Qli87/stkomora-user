import { all } from 'redux-saga/effects'
import { memberSaga } from './member.saga'
import { newsSaga} from './news.saga'

export default function* rootSaga() {
    yield all ([
        memberSaga(),
        newsSaga()
    ])
}
