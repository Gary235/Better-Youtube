import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import useOutsideAlerter from "@/hooks/useOutsideAlerter";
import { searchActions } from "@/redux/actions/search-actions";
import SearchHelper from "@/components/common/SearchHelper/SearchHelper";

import { InputSearch } from "./styles";
import ISearchProps from "./types";

const Search = (props: ISearchProps) => {
  const { searchResults } = props;

  const history = useHistory();
  const inputRef = useRef(null);
  const helpersRef = useRef(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const inputIsSubmittable = searchValue.length >= 3;

  const dispatch = useDispatch();
  useOutsideAlerter(helpersRef, [inputRef]);

  const searchForHelpers = () => {
    dispatch(searchActions.cleanHelpers());
    if (searchValue.length >= 3)
      dispatch(searchActions.getSearchHelpers(searchValue));
  };

  useEffect(() => {
    let waitForTyping = setTimeout(() => searchForHelpers(), 1000);

    return () => {
      clearTimeout(waitForTyping);
    };
  }, [searchValue]);

  const handleSubmit = () => {
    history.push(`/search/${searchValue}`);
  };

  return (
    <>
      <InputSearch
        ref={inputRef}
        placeholder="Type to search"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        autoFocus
        onFocus={() => {
          inputIsSubmittable && (helpersRef.current.style.display = "block");
        }}
        onKeyUp={(e) => e.key === "Enter" && handleSubmit()}
      />
      {inputIsSubmittable && (
        <div ref={helpersRef}>
          <SearchHelper results={searchResults} />
        </div>
      )}
    </>
  );
};

export default Search;
