import { LoginPayload } from "./authSlice";

function* handleLogin(payload: LoginPayload) {}

function* handleLogout() {}

function* watchLoginFollw() {}

export function* authSaga() {
  console.log("Auth Saga");
}
