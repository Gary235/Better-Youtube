import axios from "axios";

export const getInitialVideos = (key) => {
  const url =
    `https://www.googleapis.com/youtube/v3/videos` +
    `?key=${key}` +
    `&part=id,snippet,contentDetails,player,recordingDetails,statistics,status,topicDetails` +
    `&chart=mostPopular` +
    "&regionCode=AR" +
    `&maxResults=20`;

  return axios.get(url);
};
