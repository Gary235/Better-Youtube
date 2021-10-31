export const actionTypes = {
  CHANNEL_FINALIZE: "CHANNEL_FINALIZE",
  GET_CHANNEL_DATA: "GET_CHANNEL_DATA",
  GET_CHANNEL_DATA_ERROR: "GET_CHANNEL_DATA_ERROR",
  GET_CHANNEL_DATA_SUCCESS: "GET_CHANNEL_DATA_SUCCESS",
};

export const channelActions = {
  getChannelData: (key: string, id: string) => ({
    type: actionTypes.GET_CHANNEL_DATA,
    key,
    id,
  }),
  getChannelDataError: (error) => ({
    type: actionTypes.GET_CHANNEL_DATA_ERROR,
    error,
  }),
  getChannelDataSuccess: (payload) => ({
    type: actionTypes.GET_CHANNEL_DATA_SUCCESS,
    payload,
  }),
  channelFinalize: () => ({
    type: actionTypes.CHANNEL_FINALIZE,
  }),
};
