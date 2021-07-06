import { call, put, takeLatest } from "redux-saga/effects";
import { logIn } from "../services/authService";

export const AUTHORIZATION_SUCCESS = "AUTHORIZATION_SUCCESS";
export const AUTHORIZATION_FAIL = "AUTHORIZATION_FAIL";
export const SIGN_OUT = "SIGN_OUT";

function* logInSaga({ payload }) {
  try {
    const { username, password } = payload;
    yield call(logIn, username, password);
    yield put({ type: "AUTHORIZATION_SUCCESS", payload: username });
  } catch (error) {
    yield put({
      type: "AUTHORIZATION_FAIL",
      payload: error.message,
      error: true,
    });
  }
}

export default function* () {
  yield takeLatest("LOG_IN", logInSaga);
}
