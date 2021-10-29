import React from "react";
import useToggle from "@/hooks/useToggle";

import shortenNumbers from "@/utils/shorten-numbers";
import beautifyString from "@/utils/beautify-string";
import displayAsHtml from "@/utils/display-as-html";

import VideoPlayer from "@/components/main/VideoPlayer/VideoPlayer";
import OutlinedButtonComponent from "@/components/common/OutlinedButton/OutlinedButton";

import {
  ChannelContainer,
  ChannelInfo,
  ChannelProfilePicture,
  ChannelSecondary,
  ChannelTitle,
  VideoContainer,
  VideoDescription,
  VideoInfo,
  VideoSecondary,
  VideoTitle,
} from "./styles";
import IVideoProps from "./types";

const Video = (props: IVideoProps) => {
  const {
    title,
    description,
    channelTitle,
    viewCount,
    embedPlayer,
    channelThumbnails,
    channelSubsCount,
  } = props;
  const [showMore, { toggle: toggleShow }] = useToggle(true);

  const descriptionIsTrimmable = description.length > 250;
  const beautifyDescription = beautifyString(
    description,
    showMore && descriptionIsTrimmable
  );
  return (
    <>
      <VideoContainer>
        <VideoPlayer iframe={embedPlayer} />
        <VideoInfo>
          <VideoTitle>{title}</VideoTitle>
          <VideoSecondary>
            {shortenNumbers(parseInt(viewCount))} views
          </VideoSecondary>
        </VideoInfo>
        <ChannelContainer>
          <ChannelProfilePicture src={channelThumbnails?.medium?.url} />
          <ChannelInfo>
            <ChannelTitle>{channelTitle}</ChannelTitle>
            <ChannelSecondary>{channelSubsCount} subscribers</ChannelSecondary>
          </ChannelInfo>
          <OutlinedButtonComponent text="Subscribe" />
        </ChannelContainer>
        {description && (
          <>
            {showMore
              ? displayAsHtml(beautifyDescription, VideoDescription)
              : displayAsHtml(beautifyDescription, VideoDescription)}
            {descriptionIsTrimmable && (
              <VideoSecondary onClick={() => toggleShow()} isButton>
                {showMore ? "Show More" : "Show Less"}
              </VideoSecondary>
            )}
          </>
        )}
      </VideoContainer>
    </>
  );
};

export default Video;
