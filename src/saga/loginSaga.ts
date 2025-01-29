
import { takeLatest, call, put } from "redux-saga/effects";
import { LoginValues } from "../components/login-user/Login";
import { LOGIN_REQUEST, loginFailure, loginSuccess } from "../redux/action/loginAction";

// api call
async function fetchLogin() {
    const data = await fetch('http://localhost:8080/users');
    return await data.json()
}
//worker saga

function* loginWorkerSaga(action: any) {
    try {
        const userResponse: LoginValues[] = yield call(fetchLogin);
        const { email, password } = action.payload;
        // check if user is exist in db.json
        const userExist = userResponse.some((user) => user.email === email && user.password === password);
        if (userExist) {
            yield put(loginSuccess(userResponse));
        //    action.navigate('/pets')
        } else {
            yield put(loginFailure('invalid email and password'));

        }

    } catch (error) {
        yield put(loginFailure('login error'))

    }
}
// watcher saga
export function* loginWatcherSaga() {
    yield takeLatest(LOGIN_REQUEST, loginWorkerSaga)
}