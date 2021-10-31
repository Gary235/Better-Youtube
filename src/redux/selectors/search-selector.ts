import kinds from "@/utils/enums/kinds";
import { createSelector } from "reselect";

const getSearchData = (state) => state.search;

export const searchSelector = createSelector([getSearchData], (search) => {
  const { searchData } = search;

  return searchData
    ? {
        results: searchData.map((result) => ({
          kind: result.id.kind,
          url:
            result.id.kind === kinds.VIDEO_KIND
              ? `/video/${result.id.videoId}`
              : `/channel/${result.id.channelId}`,
          title: result.snippet.title,
          description: result.snippet.description,
          channelTitle: result.snippet.channelTitle,
          img: result.snippet.thumbnails.medium,
          channelId: result.snippet.channelId,
          videoId: result.id.videoId,
        })),
      }
    : { results: null };
});

export const searchHelpersSelector = createSelector(
  [getSearchData],
  (search) => {
    const { searchHelpersData } = search;

    return searchHelpersData
      ? {
          helpers: searchHelpersData,
        }
      : { helpers: null };
  }
);
