export const actionTypes = {
  GET_VIDEO_DATA: "GET_VIDEO_DATA",
  GET_VIDEO_DATA_ERROR: "GET_VIDEO_DATA_ERROR",
  GET_VIDEO_DATA_SUCCESS: "GET_VIDEO_DATA_SUCCESS",
  VIDEO_FINALIZE: "VIDEO_FINALIZE",
};

export const videoActions = {
  getVideoData: (key: string, id: string) => ({
    type: actionTypes.GET_VIDEO_DATA,
    key,
    id,
  }),
  getVideoDataError: (error) => ({
    type: actionTypes.GET_VIDEO_DATA_ERROR,
    error,
  }),
  getVideoDataSuccess: (payload) => ({
    type: actionTypes.GET_VIDEO_DATA_SUCCESS,
    payload,
  }),
  videoFinalize: () => ({
    type: actionTypes.VIDEO_FINALIZE,
  }),
};
