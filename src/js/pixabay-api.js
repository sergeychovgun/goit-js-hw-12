import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "55702629-61a52a53581ffbc81075bfc8f";

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  };

  return axios.get(BASE_URL, { params })
    .then(response => response.data);
}
