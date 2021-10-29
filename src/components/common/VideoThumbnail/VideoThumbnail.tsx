import React from "react";

import getTimeGap from "@/utils/get-time-gap";
import shortenNumbers from "@/utils/shorten-numbers";

import {
  ThumbnailContainer,
  ThumbnailImage,
  ThumbnailInfo,
  ThumbnailStatistics,
  ThumbnailTitle,
  ThumbnailSecondary,
  ThumbnailChannel,
} from "./styles";
import IVideoThumbnailProps from "./types";

const VideoThumbnail = (props: IVideoThumbnailProps): JSX.Element => {
  const { id, snippet, statistics } = props;

  return (
    <ThumbnailContainer to={`/video/${id}`}>
      <ThumbnailImage
        src={snippet.thumbnails.medium.url}
        loading="lazy"
        decoding="async"
        width={snippet.thumbnails.medium.width}
        height={snippet.thumbnails.medium.height}
      />
      <ThumbnailStatistics>
        <ThumbnailSecondary>
          {shortenNumbers(parseInt(statistics.viewCount))} views
        </ThumbnailSecondary>
        <ThumbnailSecondary>
          {getTimeGap(snippet.publishedAt)}
        </ThumbnailSecondary>
      </ThumbnailStatistics>
      <ThumbnailInfo>
        <ThumbnailTitle>{snippet.title}</ThumbnailTitle>
        <ThumbnailChannel>{snippet.channelTitle}</ThumbnailChannel>
      </ThumbnailInfo>
    </ThumbnailContainer>
  );
};

export default VideoThumbnail;
