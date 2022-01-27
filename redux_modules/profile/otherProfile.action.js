import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import makeRequest from '../../function/makeRequest';

export const getOtherProfile = createAsyncThunk(
  'otherProfile/getOtherProfile',
  async () => {
    try {
      const res = await makeRequest({
        method: 'GET',
        // url: `/users/${userId}/profile`,
      });
      return res;
    } catch (error) {
      console.log(error);
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
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
});
