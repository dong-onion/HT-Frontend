import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import makeRequest from '../../function/makeRequest';

export const getOtherProfile = createAsyncThunk(
  'otherProfile/getOtherProfile',
  async userId => {
    try {
      const res = await makeRequest({
        method: 'GET',
        url: `/users/${userId}/profile`,
      });
      console.log('getOtherProfile :', res.data);
      return res.data;
    } catch (error) {
      console.log('getOtherProfile :', error);
      return {};
    }
  },
);

export const setFollowAction = createAction(
  'otherProfile/setFollowAction',
  follow => {
    return { payload: { follow } };
  },
);

export const fetchJson = createAsyncThunk('fetch/json', async () => {
  try {
    const res = await axios.get('http://13.209.45.119:8080/users/1/profile');
    console.log('Data', res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
});
