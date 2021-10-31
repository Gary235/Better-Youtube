import { createSelector } from "reselect";

const getVideoData = (state) => state.video;

const videoSelector = createSelector([getVideoData], (video) => {
  const { videoData } = video;
  const snippet = videoData?.snippet;
  const statistics = videoData?.statistics;
  const player = videoData?.player;

  return {
    title: snippet?.title,
    description: snippet?.description,
    channelId: snippet?.channelId,
    channelTitle: snippet?.channelTitle,
    viewCount: statistics?.viewCount,
    embedPlayer: player?.embedHtml,
  };
});

export default videoSelector;
