import { call, all, takeLatest, put } from "@redux-saga/core/effects";
import cityApi from "api/cityApi";
import studentApi from "api/studentApi";
import { City, ListResponse, Student } from "types";
import { delay } from "utils/delay";
import { dashboardActions, RankingByCity } from "./dashboardSlice";

function* fetchStatistics() {
  const responseList: Array<ListResponse<Student>> = yield all([
    call(studentApi.getAll, { _page: 1, _limit: 1, gender: "male" }), // lấy cái _totalRows nên chỉ cần đề _limit : 1
    call(studentApi.getAll, { _page: 1, _limit: 1, gender: "female" }),
    call(studentApi.getAll, { _page: 1, _limit: 1, mark_gte: 8 }),
    call(studentApi.getAll, { _page: 1, _limit: 1, mark_lte: 5 }),
  ]);
  const statisticList = responseList.map((x) => x.pagination._totalRows);
  const [maleCount, femaleCount, highMarkCount, lowMarkCount] = statisticList;
  yield put(
    dashboardActions.setStatistic({
      maleCount,
      femaleCount,
      highMarkCount,
      lowMarkCount,
    }),
  );
}
function* fetchHighestStudentList() {
  const { data }: ListResponse<Student> = yield call(studentApi.getAll, {
    _page: 1,
    _limit: 5,
    _sort: "mark",
    _order: "desc",
  });
  yield put(dashboardActions.setHighestStudentList(data));
}
function* fetchLowestStudentList() {
  const { data }: ListResponse<Student> = yield call(studentApi.getAll, {
    _page: 1,
    _limit: 5,
    _sort: "mark",
    _order: "asc",
  });

  yield put(dashboardActions.setLowestStudentList(data));
}
function* fetchRankingByCityList() {
  // Fetch city list
  const { data: cityList }: ListResponse<City> = yield call(cityApi.getAll);

  // Fetch ranking per city
  const callList = cityList.map((x) =>
    call(studentApi.getAll, {
      _page: 1,
      _limit: 5,
      _sort: "mark",
      _order: "desc",
      city: x.code,
    }),
  );
  const responList: Array<ListResponse<Student>> = yield all(callList);
  const rankingByCityList: Array<RankingByCity> = responList.map((x, idx) => ({
    cityId: cityList[idx].code,
    rankingList: x.data,
    cityName: cityList[idx].name,
  }));
  // Update state
  yield put(dashboardActions.setRankingByCityList(rankingByCityList));
}

function* fetDashboardData() {
  try {
    // call 4 cái cùng lúc thì dùng all
    // 4 thằng sẽ chạy song song với nhau
    yield all([
      //all : Blocks if there is a blocking effect in the array or object
      // ==> sẽ là blocking nếu 1 thằng trong mảng là blocking

      // ==> mà call là blocking thì => all là bloking, nó sẽ đứng đợi thằng all thực hiện xong
      call(fetchStatistics), // call is blocking call
      call(fetchHighestStudentList),
      call(fetchLowestStudentList),
      call(fetchRankingByCityList),
    ]);
    yield call(delay, 500);
    yield put(dashboardActions.fetchDataSuccess());
  } catch (error) {
    console.log("Failed to fetch dashboard data", error);
  }
}
export default function* dashboardSaga() {
  yield takeLatest(dashboardActions.fetchData.type, fetDashboardData);
}
