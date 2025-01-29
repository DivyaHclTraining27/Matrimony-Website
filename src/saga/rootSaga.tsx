import { loginWatcherSaga } from "./loginSaga";
import {all} from 'redux-saga/effects';
function* rootSaga(){
    yield all([loginWatcherSaga()])
}
export default rootSaga