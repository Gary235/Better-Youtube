import { all } from "redux-saga/effects";

import { watchHome } from "./home-saga";
import { watchVideoData } from "./video-saga";
import { watchChannelData } from "./channel-saga";
import { watchSearchHelpersData, watchSearchResultsData } from "./search-saga";

export default function* rootSaga() {
  yield all([
    watchHome(),
    watchVideoData(),
    watchChannelData(),
    watchSearchHelpersData(),
    watchSearchResultsData(),
  ]);
}
