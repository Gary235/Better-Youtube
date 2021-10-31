import { takeLatest, call, put, all } from "@redux-saga/core/effects";
import { actionTypes, searchActions } from "@/redux/actions/search-actions";

import { getSearchHelpers, getSearchByQuery } from "@/api/search-api";
import { getChannelData } from "@/api/channel-api";
import loadImages from "@/utils/load-images";

function* onGetSearchHelpers(action) {
  try {
    const { data } = yield call(getSearchHelpers, action.q);

    yield put(searchActions.getSearchHelpersSuccess(data));
  } catch (error) {
    yield put(searchActions.getSearchHelpersError(error));
  }
}

function* onGetSearchResults(action) {
  try {
    const { data } = yield call(getSearchByQuery, action.key, action.q);

    yield put(searchActions.getSearchResultsSuccess(data.items));

    const channelIds = data.items.map((item) => item.snippet.channelId);
    const videoIds = data.items.map((item) => item.id.videoId);
    const promises = channelIds.map(
      (id) =>
        new Promise((resolve, reject) => {
          try {
            resolve(getChannelData(action.key, id));
          } catch (error) {
            reject(error);
          }
        })
    );

    loadImages(promises, videoIds);
  } catch (error) {
    yield put(searchActions.getSearchResultsError(error));
  }
}

export function* watchSearchHelpersData() {
  yield all([takeLatest([actionTypes.GET_SEARCH_HELPERS], onGetSearchHelpers)]);
}

export function* watchSearchResultsData() {
  yield all([takeLatest([actionTypes.GET_SEARCH_RESULTS], onGetSearchResults)]);
}
