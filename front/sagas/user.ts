import { all, fork, call, put, takeEvery } from 'redux-saga/effects';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../reducers/user';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3065/api';

function* loginAPI(loginData: any) {
    return axios.post('/user/login', loginData);
}

function* login(action: any) {
    try {
        yield call(loginAPI, action.data);
        yield put({     
            type: LOG_IN_SUCCESS,
            data: action.data,
        });
    } catch (e) {       
        console.error(e);
        yield put({
            type: LOG_IN_FAILURE,
        });
    }
}

function* watchLogin() {
    yield takeEvery(LOG_IN_REQUEST, login);
}

function signUpAPI(signUpData: any) {
    return axios.post('/user/', signUpData);       
}

function* signUp(action: any) {
    try {
        yield call(signUpAPI, action.data);
        yield put({   
            type: SIGN_UP_SUCCESS,
        });
    } catch (e) { 
        console.error(e);
        yield put({
            type: SIGN_UP_FAILURE,
            error: e,
        });
    }
}

function* watchSignUp() {
    yield takeEvery(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchSignUp),
    ]);
}