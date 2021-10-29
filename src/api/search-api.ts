import axios from "axios";

export const getSearchByQuery = (key: string, q: string) => {
  const url =
    `https://www.googleapis.com/youtube/v3/search` +
    `?key=${key}` +
    `&part=snippet` +
    `&q=${q}` +
    `&maxResults=10`;

  return axios.get(url);
};

export const getSearchHelpers = (q: string) => {
  const url = `https://youtube-puppeteer.herokuapp.com/?search=${encodeURI(q)}`;

  return axios.get(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      Accept: "json/application",
    },
  });
};
