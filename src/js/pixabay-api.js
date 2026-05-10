import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "55702629-61a52a53581ffbc81075bfc8f";
const PER_PAGE = 15;

export async function getImagesByQuery(query, page) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    page,
    per_page: PER_PAGE,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}