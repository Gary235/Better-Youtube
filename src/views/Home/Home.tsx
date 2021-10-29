import React from "react";

import GridFeed from "@/components/common/GridFeed/GridFeed";
import VideoThumbnail from "@/components/common/VideoThumbnail/VideoThumbnail";

import { HomeContainer } from "./styles";
import IHome from "./types";

const Home = (props: IHome) => {
  const { videos } = props;

  return (
    <HomeContainer>
      <GridFeed items={videos} ItemComponent={VideoThumbnail} />
    </HomeContainer>
  );
};

export default Home;
