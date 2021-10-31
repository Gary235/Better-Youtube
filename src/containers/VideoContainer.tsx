import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { videoActions } from "@/redux/actions/video-actions";
import { channelActions } from "@/redux/actions/channel-actions";
import videoSelector from "@/redux/selectors/video-selector";
import channelSelector from "@/redux/selectors/channel-selector";

import Video from "@/views/Video/Video";
import Loading from "@/components/common/Loading/Loading";
import LayoutContainer from "./LayoutContainer";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const { videoId } = useParams<{ videoId: string }>();
  useEffect(() => {
    const key = import.meta.env.VITE_API_KEY;

    dispatch(videoActions.getVideoData(key, videoId));

    return function finalize() {
      dispatch(videoActions.videoFinalize());
      dispatch(channelActions.channelFinalize());
    };
  }, [dispatch]);

  const {
    title,
    channelTitle,
    channelId,
    viewCount,
    embedPlayer,
    description,
  } = useSelector(videoSelector);
  const { channelThumbnails, channelSubsCount } = useSelector(channelSelector);

  return !embedPlayer ? (
    <Loading />
  ) : (
    <LayoutContainer>
      <Video
        title={title}
        description={description}
        channelTitle={channelTitle}
        channelId={channelId}
        viewCount={viewCount}
        embedPlayer={embedPlayer}
        channelThumbnails={channelThumbnails}
        channelSubsCount={channelSubsCount}
      />
    </LayoutContainer>
  );
};

export default VideoContainer;
