import React from "react";
import {
  VideoItemContainer,
  VideoItemInfo,
  VideoItemPhoto,
  VideoItemTitle,
  VideoItemDescription,
} from "./styles";
import ISearchVideo from "@/types/search-item";
import { Link } from "react-router-dom";
import kinds from "@/utils/enums/kinds";

const VideoItemList = (props: ISearchVideo) => {
  const { img, title, url, channelTitle, description, kind } = props;
  console.log({ img, title, url, channelTitle, description, kind });

  const isVideo = kind === kinds.VIDEO_KIND;
  const replaceQuotes = (text: string) => {
    const textQuoted = text.replace(/&quot;/g, '"');
    return textQuoted;
  };

  return (
    <Link to={url}>
      <VideoItemContainer>
        <VideoItemPhoto
          loading="lazy"
          src={img.url}
          alt={`${kind}-${url}`}
          width={img.width}
          height={img.height}
          isVideo={isVideo}
        />
        <VideoItemInfo>
          <VideoItemTitle>{replaceQuotes(title)}</VideoItemTitle>
          <VideoItemDescription>
            {description.slice(0, 100)}
            {description && "..."}
          </VideoItemDescription>
        </VideoItemInfo>
      </VideoItemContainer>
    </Link>
  );
};

export default VideoItemList;
