export const actionTypes = {
  GET_INITIAL_VIDEOS: "GET_INITIAL_VIDEOS",
  GET_INITIAL_VIDEOS_ERROR: "GET_INITIAL_VIDEOS_ERROR",
  GET_INITIAL_VIDEOS_SUCCESS: "GET_INITIAL_VIDEOS_SUCCESS",
  CLEAN_HOME: "CLEAN_HOME",
};

export const homeActions = {
  getVideos: (key: string) => ({
    type: actionTypes.GET_INITIAL_VIDEOS,
    key,
  }),
  getVideosError: (error) => ({
    type: actionTypes.GET_INITIAL_VIDEOS_ERROR,
    error,
  }),
  getVideosSuccess: (payload) => ({
    type: actionTypes.GET_INITIAL_VIDEOS_SUCCESS,
    payload,
  }),
  cleanHome: () => ({
    type: actionTypes.CLEAN_HOME,
  }),
};
