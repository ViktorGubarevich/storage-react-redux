import { call, put, takeLatest } from "redux-saga/effects";
import { logIn, signUp } from "./storageApi";

function* logInSaga({ payload }) {
  try {
    const { username, password } = payload;
    yield call(logIn, username, password);
    yield put({ type: "USERS_LOGIN_SUCCESS", payload: username });
  } catch (error) {
    yield put({
      type: "USERS_LOGIN_FAILURE",
      payload: error.message,
      error: true,
    });
  }
}

function* signUpSaga({ payload }) {
  try {
    const { username, password } = payload;
    yield call(signUp, username, password);
    yield put({ type: "USERS_REGISTER_SUCCESS", payload: username });
  } catch (error) {
    yield put({
      type: "USERS_REGISTER_FAILURE",
      payload: error.message,
      error: true,
    });
  }
}


export default function* rootSaga() {
  yield takeLatest("LOG_IN", logInSaga);
  yield takeLatest("SIGN_UP", signUpSaga);
}


