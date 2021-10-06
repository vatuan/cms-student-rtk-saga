import { PayloadAction } from "@reduxjs/toolkit";
import { push } from "connected-react-router";
import { fork, take, delay, call, put } from "redux-saga/effects";
import { authActions, LoginPayload } from "./authSlice";

function* handleLogin(payload: LoginPayload) {
  try {
    yield delay(1000);
    localStorage.setItem("access_token", "fake_token");
    yield put(
      authActions.loginSuccess({
        id: "1",
        name: "Micheal Vu",
      }),
    );
    // redirect to admin page
    yield put(push("/admin"));
  } catch (error: any) {
    yield put(authActions.loginFailed(error.message));
  }
}

function* handleLogout() {
  yield delay(500);
  localStorage.removeItem("access_token");
  // redirect to login page
  yield put(push("/login"));
}

function* watchLoginFollw() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem("access_token"));
    if (!isLoggedIn) {
      //need payload
      const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }

    // dont need payload
    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export function* authSaga() {
  yield fork(watchLoginFollw);
}
