/* eslint-disable react/display-name */
import React, { memo } from "react";

import useDevice from "@/hooks/useDevice";
import displayAsHtml from "@/utils/display-as-html";
import devices from "@/utils/enums/devices";

import { VideoPlayerContainer } from "./styles";
import IVideoPlayerProps from "./types";

const VideoPlayer = memo((props: IVideoPlayerProps) => {
  const { iframe } = props;
  const device = useDevice();

  const playerSize =
    device === devices.DEVICE_SMALL
      ? { width: 304, height: 171 }
      : device === devices.DEVICE_MEDIUM
      ? { width: 480, height: 270 }
      : { width: 800, height: 450 };

  const resizedIframe = iframe
    .replace('width="480"', `width="${playerSize.width}"`)
    .replace('height="270"', `height="${playerSize.height}"`);

  return (
    <VideoPlayerContainer>{displayAsHtml(resizedIframe)}</VideoPlayerContainer>
  );
});

export default VideoPlayer;
