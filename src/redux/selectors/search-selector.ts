import { createSelector } from "reselect";

const getSearchData = (state) => state.search;

export const searchSelector = createSelector([getSearchData], (search) => {
  const { searchData } = search;

  return searchData
    ? {
        results: searchData.map((result) => ({
          kind: result.id.kind,
          url: `/video/${result.id.videoId}`,
          title: result.snippet.title,
          description: result.snippet.description,
          channelTitle: result.snippet.channelTitle,
          img: result.snippet.thumbnails.medium,
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
