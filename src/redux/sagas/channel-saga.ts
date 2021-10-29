import { takeLatest, call, put, all } from "@redux-saga/core/effects";
import { actionTypes, channelActions } from "@/redux/actions/channel-actions";

import { getChannelData } from "@/api/channel-api";

function* onGetChannelData(action) {
  try {
    const { data } = yield call(getChannelData, action.key, action.id);
    yield put(channelActions.getChannelDataSuccess(data.items[0]));
  } catch (error) {
    yield put(channelActions.getChannelDataError(error));
  }
}

export function* watchChannelData() {
  yield all([takeLatest([actionTypes.GET_CHANNEL_DATA], onGetChannelData)]);
}
