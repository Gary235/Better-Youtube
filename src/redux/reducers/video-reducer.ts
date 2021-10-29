import { actionTypes } from "@/redux/actions/video-actions";

const defaultState = {
  videoData: null,
};

const resetVideoData = () => ({
  videoData: null,
});

const setVideoData = (state, videoData) => ({
  ...state,
  videoData,
});

const videoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_VIDEO_DATA_SUCCESS:
      return setVideoData(state, action.payload);
    case actionTypes.VIDEO_FINALIZE:
      return resetVideoData();
    default:
      return state;
  }
};

export default videoReducer;
