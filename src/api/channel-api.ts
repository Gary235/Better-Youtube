import axios from "axios";

export const getChannelData = (key: string, id: string) => {
  const url =
    `https://www.googleapis.com/youtube/v3/channels` +
    `?key=${key}` +
    `&part=snippet,statistics` +
    `&id=${id}`;

  return axios.get(url);
};
