import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { City, ListResponse } from "types";

export interface CityState {
  listCity: City[];
  loading: boolean;
}
const initialState: CityState = {
  listCity: [],
  loading: false,
};
export const citySlice = createSlice({
  name: "city",
  initialState: initialState,
  reducers: {
    fetchCityList(state) {
      state.loading = true;
    },
    fetchCityListSuccess(state, action: PayloadAction<ListResponse<City>>) {
      state.loading = false;
      state.listCity = action.payload.data;
    },
    fetchCityListFailed(state) {
      state.loading = false;
    },
  },
});

//actions
export const cityActions = citySlice.actions;

// reducers
export const cityReducer = citySlice.reducer;

// selectors
export const selectCityList = (state: RootState) => state.city.listCity;

export const selectCityMap = createSelector(selectCityList, (cityList) =>
  cityList.reduce((map: { [key: string]: City }, city) => {
    map[city.code] = city;
    return map;
  }, {}),
);
