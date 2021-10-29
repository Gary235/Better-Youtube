import { createSelector } from "reselect";

const getChannelData = (state) => state.channel;

const channelSelector = createSelector([getChannelData], (channel) => {
  const { channelData } = channel;
  const channelSnippet = channelData?.snippet;
  const channelStatistics = channelData?.statistics;

  return {
    channelThumbnails: channelSnippet?.thumbnails,
    channelSubsCount: channelStatistics?.subscriberCount,
  };
});

export default channelSelector;
