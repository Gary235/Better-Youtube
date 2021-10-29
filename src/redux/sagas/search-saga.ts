import { takeLatest, call, put, all } from "@redux-saga/core/effects";
import { actionTypes, searchActions } from "@/redux/actions/search-actions";

import { getSearchHelpers, getSearchByQuery } from "@/api/search-api";

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
    // yield put(searchActions.cleanResults());
    const { data } = yield call(getSearchByQuery, action.key, action.q);

    yield put(searchActions.getSearchResultsSuccess(data.items));
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
