import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const baseURL = 'http://13.209.45.119:8080';
const makeRequest = async config => {
  const token = await AsyncStorage.getItem('token');
  const requestConfiguration = {
    ...config,
    baseURL,
    Headers: { X_AUTH_TOKEN: token },
  };
  const { data } = await axios(requestConfiguration);
  return data;
};

export default makeRequest;
