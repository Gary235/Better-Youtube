import { createSelector } from "reselect";

const getHomeData = (state) => state.home;

const homeSelector = createSelector([getHomeData], (homeData) => {
  const { videos } = homeData;
  return {
    videos: videos?.map((video) => ({
      id: video.id,
      snippet: video.snippet,
      statistics: video.statistics,
    })),
  };
});

export default homeSelector;
