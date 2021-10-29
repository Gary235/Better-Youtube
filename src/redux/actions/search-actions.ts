export const actionTypes = {
  CLEAN_HELPERS: "CLEAN_HELPERS",
  CLEAN_RESULTS: "CLEAN_RESULTS",
  GET_SEARCH_HELPERS: "GET_SEARCH_HELPERS",
  GET_SEARCH_HELPERS_ERROR: "GET_SEARCH_HELPERS_ERROR",
  GET_SEARCH_HELPERS_SUCCESS: "GET_SEARCH_HELPERS_SUCCESS",
  GET_SEARCH_RESULTS: "GET_SEARCH_RESULTS",
  GET_SEARCH_RESULTS_ERROR: "GET_SEARCH_RESULTS_ERROR",
  GET_SEARCH_RESULTS_SUCCESS: "GET_SEARCH_RESULTS_SUCCESS",
};

export const searchActions = {
  getSearchHelpers: (q: string) => ({
    type: actionTypes.GET_SEARCH_HELPERS,
    q,
  }),
  getSearchHelpersError: (error) => ({
    type: actionTypes.GET_SEARCH_HELPERS_ERROR,
    error,
  }),
  getSearchHelpersSuccess: (payload) => ({
    type: actionTypes.GET_SEARCH_HELPERS_SUCCESS,
    payload,
  }),
  getSearchResults: (key: string, q: string) => ({
    type: actionTypes.GET_SEARCH_RESULTS,
    key,
    q,
  }),
  getSearchResultsError: (error) => ({
    type: actionTypes.GET_SEARCH_RESULTS_ERROR,
    error,
  }),
  getSearchResultsSuccess: (payload) => ({
    type: actionTypes.GET_SEARCH_RESULTS_SUCCESS,
    payload,
  }),
  cleanResults: () => ({
    type: actionTypes.CLEAN_RESULTS,
  }),
  cleanHelpers: () => ({
    type: actionTypes.CLEAN_HELPERS,
  }),
};
