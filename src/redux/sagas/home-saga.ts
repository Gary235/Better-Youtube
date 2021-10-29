import { takeLatest, call, put, all } from "@redux-saga/core/effects";
import { actionTypes, homeActions } from "@/redux/actions/home-actions";

import { getInitialVideos } from "@/api/home-api";

function* onGetVideos(action) {
  try {
    const { data } = yield call(getInitialVideos, action.key);

    yield put(homeActions.getVideosSuccess(data.items));
  } catch (error) {
    yield put(homeActions.getVideosError(error));
  }
}

export function* watchHome() {
  yield all([takeLatest([actionTypes.GET_INITIAL_VIDEOS], onGetVideos)]);
}
