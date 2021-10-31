import beautifyString from "@/utils/beautify-string";
import displayAsHtml from "@/utils/display-as-html";
import React from "react";
import {
  ChannelInfo,
  ChannelSecondary,
  ChannelTitle,
  ProfilePicture,
} from "./styles";
import IChannelProps from "./types";

const Channel = (props: IChannelProps) => {
  const { title, description, thumbnails, subsCount } = props;
  console.log({ title, description, thumbnails, subsCount });

  const beautifyDescription = beautifyString(description);
  return (
    <>
      <ChannelInfo>
        <ProfilePicture src={thumbnails?.medium?.url} />
        <ChannelTitle>{title}</ChannelTitle>
        {displayAsHtml(beautifyDescription, ChannelSecondary)}
      </ChannelInfo>
    </>
  );
};

export default Channel;
