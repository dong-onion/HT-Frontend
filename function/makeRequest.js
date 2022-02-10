/* eslint-disable prettier/prettier */
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const baseURL = 'http://13.209.45.119:8080';
const makeRequest = async config => {
  const token = await AsyncStorage.getItem('token');
  const requestConfiguration = {
    ...config,
    baseURL,
    Headers: { 'X_AUTH_TOKEN': token, ...config.headers },
  };
  const { data } = await axios(requestConfiguration);
  if (data) {
    return data;
  } else {
    return null;
  }
  // return data ? data : null
};

export default makeRequest;
