import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { searchActions } from "@/redux/actions/search-actions";

import LayoutContainer from "./LayoutContainer";
import Search from "@/views/Search/Search";
import { searchSelector } from "@/redux/selectors/search-selector";
import Loading from "@/components/common/Loading/Loading";
import { channelActions } from "@/redux/actions/channel-actions";

const SearchContainer = () => {
  const dispatch = useDispatch();
  const { searchQuery } = useParams<{ searchQuery: string }>();

  useEffect(() => {
    dispatch(searchActions.cleanResults());

    const key = import.meta.env.VITE_API_KEY;
    dispatch(searchActions.getSearchResults(key, searchQuery));
    return () => {
      dispatch(searchActions.cleanResults());
      dispatch(channelActions.channelFinalize());
    };
  }, [searchQuery]);

  const { results } = useSelector(searchSelector);

  return !results ? (
    <Loading />
  ) : (
    <LayoutContainer>
      <Search results={results} />
    </LayoutContainer>
  );
};

export default SearchContainer;
