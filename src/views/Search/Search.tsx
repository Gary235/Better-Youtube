import React from "react";

import useDevice from "@/hooks/useDevice";
import GridFeed from "@/components/common/GridFeed/GridFeed";
import VideoItemList from "@/components/common/VideoListItem/VideoListItem";

import { SearchViewContainer } from "./styles";
import ISearchProps from "./types";
import devices from "@/utils/enums/devices";

const Search = (props: ISearchProps) => {
  const { results } = props;
  const device = useDevice();

  const columnNumber = device === devices.DEVICE_LARGE ? 2 : 1;

  return (
    <SearchViewContainer>
      <GridFeed
        items={results}
        ItemComponent={VideoItemList}
        columns={columnNumber}
      />
    </SearchViewContainer>
  );
};

export default Search;
