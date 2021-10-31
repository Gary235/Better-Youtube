import React from "react";

import useDevice from "@/hooks/useDevice";
import GridFeed from "@/components/common/GridFeed/GridFeed";
import SearchItem from "@/components/common/SearchItem/SearchItem";

import { SearchViewContainer } from "./styles";
import ISearchProps from "./types";
import devices from "@/utils/enums/devices";

const Search = (props: ISearchProps) => {
  const { results } = props;
  const device = useDevice();

  const columnNumber = device === devices.DEVICE_SMALL ? 1 : 2;

  return (
    <SearchViewContainer>
      <GridFeed
        items={results}
        ItemComponent={SearchItem}
        columns={columnNumber}
      />
    </SearchViewContainer>
  );
};

export default Search;
