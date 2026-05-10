import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from "./js/render-functions";

const form = document.querySelector(".form");
const loadMoreBtn = document.querySelector(".load-more");

let page = 1;
let query = "";
let totalHits = 0;
const PER_PAGE = 15;

form.addEventListener("submit", onSearch);
loadMoreBtn.addEventListener("click", onLoadMore);

async function onSearch(e) {
  e.preventDefault();

  query = e.target.elements["search-text"].value.trim();

  if (!query) return;

  page = 1;
  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.error({
        message: "Sorry, there are no images matching your search query. Please try again!",
      });
      return;
    }

    createGallery(data.hits);

    if (totalHits > PER_PAGE) {
      showLoadMoreButton();
    }

  } catch (error) {
    iziToast.error({
      message: "Something went wrong!",
    });
  } finally {
    hideLoader();
    form.reset();
  }
}

async function onLoadMore() {
  page += 1;

  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    createGallery(data.hits);

    const totalLoaded = page * PER_PAGE;

    if (totalLoaded >= totalHits) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    } else {
      showLoadMoreButton();
    }

    const card = document.querySelector(".gallery-item");

    const height = card.getBoundingClientRect().height;

    window.scrollBy({
      top: height * 2,
      behavior: "smooth",
    });

  } catch (error) {
    iziToast.error({
      message: "Something went wrong!",
    });
  } finally {
    hideLoader();
  }
}
