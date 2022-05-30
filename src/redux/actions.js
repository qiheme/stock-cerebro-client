import * as actionTypes from "./actionTypes";
import {searchNews, searchStock} from "../utils";

export function fetchNews(mounted) {
  return function fetchNewsThunk(dispatch) {
    dispatch({type: actionTypes.FETCH_NEWS});

    if (!mounted) {
      return;
    } else {
      searchNews()
        .then((response) => {
          dispatch({type: actionTypes.FETCH_NEWS_SUCCESS, payload: response});
        })
        .then(() => dispatch({type: actionTypes.LOADING_COMPLETE}))
        .catch((error) => {
          dispatch({type: actionTypes.FETCH_NEWS_FAILED});
          console.error(error);
        });
    }
  };
}

export const fetchNewsSuccess = (content) => ({
  type: actionTypes.FETCH_NEWS_SUCCESS,
  payload: content,
});

export const fetchNewsFailed = () => ({
  type: actionTypes.FETCH_NEWS_FAILED,
});

export function fetchStocks(mounted, stockId) {
  return function fetchStocksThunk(dispatch) {
    dispatch({type: actionTypes.FETCH_STOCK});
    console.log(mounted && stockId);
    if (mounted && stockId) {
      searchStock(stockId)
        .then((response) => {
          dispatch({type: actionTypes.FETCH_NEWS_SUCCESS, payload: response});
        })
        .then(() => dispatch({type: "LOADING_COMPLETE"}))
        .catch(() => dispatch({type: "FETCH_STOCK_FAILED"}));
    }
  };
}

export const fetchStockSuccess = (content) => ({
  type: actionTypes.FETCH_STOCK_SUCCESS,
  payload: content,
});

export const fetchStockFailed = () => ({
  type: actionTypes.FETCH_STOCK_FAILED,
});

export const loadingBegin = (content) => ({
  type: actionTypes.LOADING_BEGIN,
  payload: content,
});

export const loadingComplete = () => ({
  type: actionTypes.LOADING_COMPLETE,
});
