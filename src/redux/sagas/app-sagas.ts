import { takeLatest, call, all } from "@redux-saga/core/effects";
import { actionTypes } from "@/redux/actions/app-actions";

import { getSearchHelpers } from "@/api/search-api";

function* onAwakeHelpersApi() {
  try {
    const { data } = yield call(getSearchHelpers, "start");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export function* watchChannelData() {
  yield all([takeLatest([actionTypes.AWAKE_HELPERS_API], onAwakeHelpersApi)]);
}
