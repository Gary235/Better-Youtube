import axios from "axios";

export const getVideoData = (key: string, id: string) => {
  const url =
    `https://www.googleapis.com/youtube/v3/videos` +
    `?key=${key}` +
    `&part=snippet,statistics,player` +
    `&id=${id}`;

  return axios.get(url);
};
