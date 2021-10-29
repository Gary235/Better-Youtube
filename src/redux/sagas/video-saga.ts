import { takeLatest, call, put, all } from "@redux-saga/core/effects";
import { actionTypes, videoActions } from "@/redux/actions/video-actions";
import { channelActions } from "../actions/channel-actions";

import { getVideoData } from "@/api/video-api";

function* onGetVideoData(action) {
  try {
    const { data } = yield call(getVideoData, action.key, action.id);

    yield put(
      channelActions.getChannelData(action.key, data.items[0].snippet.channelId)
    );
    yield put(videoActions.getVideoDataSuccess(data.items[0]));
  } catch (error) {
    yield put(videoActions.getVideoDataError(error));
  }
}

export function* watchVideoData() {
  yield all([takeLatest([actionTypes.GET_VIDEO_DATA], onGetVideoData)]);
}
