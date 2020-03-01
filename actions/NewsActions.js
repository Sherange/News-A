import axios from 'axios';
import {NEWS_API_KEY} from '../const';
import * as Types from './actionTypes';

export const fetchHeadLines = () => async dispatch => {
  const apiEndPoint = `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${NEWS_API_KEY}`;
  axios
    .get(apiEndPoint, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      if (response.status === 200) {
        dispatch({type: Types.HEADLINES, payload: response.data.articles});
      }
    })
    .catch(error => {
      console.log('error', error);
    });
};

export const fetchNews = () => async dispatch => {
  const apiEndPoint = `http://newsapi.org/v2/sources?apiKey=${NEWS_API_KEY}`;
  axios
    .get(apiEndPoint, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      if (response.status === 200) {
        dispatch({type: Types.NEWS_LIST, payload: response.data.sources});
      }
    })
    .catch(error => {
      console.log('error', error.response);
    });
};
