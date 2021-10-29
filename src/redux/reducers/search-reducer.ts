import { actionTypes } from "@/redux/actions/search-actions";

const defaultState = {
  searchData: null,
  searchHelpersData: null,
};

const resetSearchData = (state) => ({
  ...state,
  searchData: null,
});

const resetSearchHelpersData = (state) => ({
  ...state,
  searchHelpersData: null,
});

const setSearchHelpersData = (state, searchHelpersData) => ({
  ...state,
  searchHelpersData,
});

const setSearchResultsData = (state, searchData) => ({
  ...state,
  searchData,
});

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_SEARCH_HELPERS_SUCCESS:
      return setSearchHelpersData(state, action.payload);
    case actionTypes.GET_SEARCH_RESULTS_SUCCESS:
      return setSearchResultsData(state, action.payload);
    case actionTypes.CLEAN_RESULTS:
      return resetSearchData(state);
    case actionTypes.CLEAN_HELPERS:
      return resetSearchHelpersData(state);
    default:
      return state;
  }
};

export default searchReducer;
