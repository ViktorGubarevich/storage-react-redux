import { call, put, takeLatest } from "redux-saga/effects";
import { logIn, signUp } from "./storageApi";

function* saga(callback, { payload }, { success, fail }) {
  try {
    const { username, password } = payload;
    yield call(callback, username, password);
    yield put({ type: success, payload: username });
  } catch (error) {
    yield put({
      type: fail,
      payload: error.message,
      error: true,
    });
  }
}

const logInSaga = (attr) =>
  saga(logIn, attr, {
    success: "USERS_LOGIN_SUCCESS",
    fail: "USERS_LOGIN_FAILURE",
  });

const signUpSaga = (attr) =>
  saga(signUp, attr, {
    success: "USERS_REGISTER_SUCCESS",
    fail: "USERS_REGISTER_FAILURE",
  });

export default function* rootSaga() {
  yield takeLatest("LOG_IN", logInSaga);
  yield takeLatest("SIGN_UP", signUpSaga);
}
