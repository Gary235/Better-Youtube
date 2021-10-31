import React from "react";

import kinds from "@/utils/enums/kinds";
import replaceSpecialCharacters from "@/utils/replace-special-characters";
import ISearchItem from "@/types/search-item";

import {
  SearchItemContainer,
  SearchItemInfo,
  SearchItemPhoto,
  SearchItemTitle,
  SearchItemDescription,
  SearchItemChannelInfo,
  SearchItemChannelTitle,
  SearchItemChannelPhoto,
} from "./styles";

const SearchItem = (props: ISearchItem) => {
  const {
    img,
    title,
    url,
    videoId,
    channelTitle,
    channelId,
    description,
    kind,
  } = props;

  const isVideo = kind === kinds.VIDEO_KIND;

  return (
    <SearchItemContainer to={url} isVideo={isVideo}>
      <SearchItemPhoto
        loading="lazy"
        src={img.url}
        alt={`${kind}-${url}`}
        width={img.width}
        height={img.height}
        isVideo={isVideo}
      />
      <SearchItemInfo>
        <SearchItemTitle>{replaceSpecialCharacters(title)}</SearchItemTitle>
        <SearchItemDescription>{description}</SearchItemDescription>
        {isVideo && (
          <SearchItemChannelInfo to={`/channel/${channelId}`}>
            <SearchItemChannelPhoto
              id={`channel-photo-${channelId}-${videoId}`}
              src="/src/assets/loading-state.svg"
              loading="lazy"
            />
            <SearchItemChannelTitle>{channelTitle}</SearchItemChannelTitle>
          </SearchItemChannelInfo>
        )}
      </SearchItemInfo>
    </SearchItemContainer>
  );
};

export default SearchItem;
