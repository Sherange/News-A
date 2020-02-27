import axios from 'axios';
import * as Types from './actionTypes';

export const fetchNews = () => async dispatch => {
  const accessToken = '';
  const apiEndPoint = '';
  axios
    .get(apiEndPoint, {
      headers: {
        Authorization: `${accessToken}`,
      },
    })
    .then(response => {
      dispatch({type: Types.AUTH_USER, payload: response.data});
    })
    .catch(error => {
      console.log('error', error.response);
    });
};
