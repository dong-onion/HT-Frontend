import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import makeRequest from '../../function/makeRequest';

export const setAction = createAction(
  'workout/action',
  (type, weight, count, set, name) => {
    return { payload: { type, weight, count, set, name } };
  },
);
// export const setTitleTime = createAction('workout/title', (title, time) => {
//   return { payload: { title, time } };
// });
export const deleteAction = createAction(
  'workout/deleteAction',
  exerciseHistoryId => {
    return { payload: { exerciseHistoryId } };
  },
);
export const getMyWorkoutList = createAsyncThunk(
  'workout/getMyWorkoutList',
  async data => {
    const { userId, title } = data;
    try {
      const res = await makeRequest({
        method: 'GET',
        url: `/users/${userId}/workout-list/${title}`,
      });
      return res.data;
    } catch (e) {
      console.log('getMyWorkoutList error :', e);
      return {};
    }
  },
);
