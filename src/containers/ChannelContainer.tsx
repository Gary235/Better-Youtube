import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { channelActions } from "@/redux/actions/channel-actions";
import channelSelector from "@/redux/selectors/channel-selector";

import Channel from "@/views/Channel/Channel";
import LayoutContainer from "./LayoutContainer";
import LoadingComponent from "@/components/common/Loading/Loading";

const ChannelContainer = () => {
  const dispatch = useDispatch();
  const { channelId } = useParams<{ channelId: string }>();

  useEffect(() => {
    const key = import.meta.env.VITE_API_KEY;
    dispatch(channelActions.getChannelData(key, channelId));
  }, [dispatch]);

  const {
    channelTitle,
    channelDescription,
    channelThumbnails,
    channelSubsCount,
  } = useSelector(channelSelector);
  return channelThumbnails ? (
    <LayoutContainer>
      <Channel
        title={channelTitle}
        description={channelDescription}
        thumbnails={channelThumbnails}
        subsCount={channelSubsCount}
      />
    </LayoutContainer>
  ) : (
    <LoadingComponent />
  );
};

export default ChannelContainer;
