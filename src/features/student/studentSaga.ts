import { takeLatest, put, call } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { ListParams, ListResponse, Student } from "types";
import { studentActions } from "./studentSlice";
import studentApi from "api/studentApi";

function* fetchStudentList(action: PayloadAction<ListParams>) {
  try {
    const response: ListResponse<Student> = yield call(studentApi.getAll, action.payload);

    yield put(studentActions.fetchStudentListSuccess(response));
  } catch (error: any) {
    console.log("Failed to fetch student list", error);
    yield put(studentActions.fetchStudentListFailed(error.message));
  }
}
export default function* studentSaga() {
  // watch fetch student action
  yield takeLatest(studentActions.fetchStudentList.type, fetchStudentList);
}
