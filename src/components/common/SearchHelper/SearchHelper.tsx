import React from "react";

import { Link } from "react-router-dom";
import LoadingDots from "../LoadingDots/LoadingDots";

import {
  LoadingContainer,
  SearchHelperContainer,
  SearchHelperItem,
  SearchHelperList,
} from "./styles";
import ISearchHelperProps from "./types";

const SearchHelper = (props: ISearchHelperProps) => {
  const { results } = props;

  return (
    <SearchHelperContainer>
      {results ? (
        <SearchHelperList>
          {results.slice(0, 6).map((result, id) => (
            <Link key={`search-helper-${id}`} to={`/search/${result}`}>
              <SearchHelperItem>{result}</SearchHelperItem>
            </Link>
          ))}
        </SearchHelperList>
      ) : (
        <LoadingContainer>
          <LoadingDots />
        </LoadingContainer>
      )}
    </SearchHelperContainer>
  );
};

export default SearchHelper;
