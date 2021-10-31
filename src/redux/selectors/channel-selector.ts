import { createSelector } from "reselect";

const getChannelData = (state) => state.channel;

const channelSelector = createSelector([getChannelData], (channel) => {
  const { channelData } = channel;
  const snippet = channelData?.snippet;
  const statistics = channelData?.statistics;
  // const brandingSettings = channelData?.brandingSettings;

  return {
    channelTitle: snippet?.title,
    channelDescription: snippet?.description,
    channelThumbnails: snippet?.thumbnails,
    channelSubsCount: statistics?.subscriberCount,
    // channelColor: brandingSettings?.channel?.profileColor,
    // channelBanner: brandingSettings?.image?.bannerExternalUrl,
  };
});

export default channelSelector;
