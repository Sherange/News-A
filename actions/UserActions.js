import AsyncStorage from '@react-native-community/async-storage';
import * as Types from './actionTypes';
import {showMessage} from 'react-native-flash-message';

export const addUser = user => async dispatch => {
  try {
    await AsyncStorage.setItem('authUser', JSON.stringify(user));
    showMessage({
      message: 'User Saved Success',
      icon: 'auto',
      type: 'success',
    });
  } catch (error) {
    console.log('error', error);
  }
};

export const getUser = () => async dispatch => {
  try {
    const authUser = await AsyncStorage.getItem('authUser');
    dispatch({type: Types.AUTH_USER, payload: JSON.parse(authUser)});
  } catch (error) {
    console.log('error', error);
  }
};
