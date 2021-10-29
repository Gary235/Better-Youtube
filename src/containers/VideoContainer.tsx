import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { videoActions } from "@/redux/actions/video-actions";
import videoSelector from "@/redux/selectors/video-selector";

import Video from "@/views/Video/Video";
import Loading from "@/components/common/Loading/Loading";
import channelSelector from "@/redux/selectors/channel-selector";
import LayoutContainer from "./LayoutContainer";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const { videoId } = useParams<{ videoId: string }>();
  useEffect(() => {
    const key = import.meta.env.VITE_API_KEY;

    dispatch(videoActions.getVideoData(key, videoId));

    return function finalize() {
      dispatch(videoActions.videoFinalize());
    };
  }, [dispatch]);

  const { title, channelTitle, viewCount, embedPlayer, description } =
    useSelector(videoSelector);
  const { channelThumbnails, channelSubsCount } = useSelector(channelSelector);

  return !embedPlayer ? (
    <Loading />
  ) : (
    <LayoutContainer>
      <Video
        title={title}
        description={description}
        channelTitle={channelTitle}
        viewCount={viewCount}
        embedPlayer={embedPlayer}
        channelThumbnails={channelThumbnails}
        channelSubsCount={channelSubsCount}
      />
    </LayoutContainer>
  );
};

export default VideoContainer;
