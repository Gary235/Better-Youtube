import { actionTypes } from "@/redux/actions/channel-actions";

const defaultState = {
  channelData: null,
};

const resetChannelData = (state) => ({
  ...state,
  channelData: null,
});

const setChannelData = (state, channelData) => ({
  ...state,
  channelData,
});

const channelReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_CHANNEL_DATA_SUCCESS:
      return setChannelData(state, action.payload);
    case actionTypes.CHANNEL_FINALIZE:
      return resetChannelData(state);
    default:
      return state;
  }
};

export default channelReducer;
