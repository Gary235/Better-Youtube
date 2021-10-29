import { actionTypes } from "@/redux/actions/home-actions";

const defaultState = {
  videos: null,
};

const resetVideosData = (state) => ({
  ...state,
  videos: null,
});

const setVideosData = (state, videos) => ({
  ...state,
  videos,
});

const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_INITIAL_VIDEOS_SUCCESS:
      return setVideosData(state, action.payload);
    case actionTypes.CLEAN_HOME:
      return resetVideosData(state);
    default:
      return state;
  }
};

export default homeReducer;
