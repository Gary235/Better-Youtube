import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { searchActions } from "@/redux/actions/search-actions";

import LayoutContainer from "./LayoutContainer";
import Search from "@/views/Search/Search";
import { searchSelector } from "@/redux/selectors/search-selector";
import Loading from "@/components/common/Loading/Loading";

const SearchContainer = () => {
  const dispatch = useDispatch();
  const { searchQuery } = useParams<{ searchQuery: string }>();

  useEffect(() => {
    dispatch(searchActions.cleanResults());

    const key = import.meta.env.VITE_API_KEY;
    dispatch(searchActions.getSearchResults(key, searchQuery));
    console.log("useeffect searchcontainer");
    return () => {
      dispatch(searchActions.cleanResults());
    };
  }, [searchQuery]);

  const { results } = useSelector(searchSelector);
  console.log("out of useeffect searchcontainer", { results });

  return !results ? (
    <Loading />
  ) : (
    <LayoutContainer>
      <Search results={results} />
    </LayoutContainer>
  );
};

export default SearchContainer;
