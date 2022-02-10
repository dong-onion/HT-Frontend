import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import makeRequest from '../../function/makeRequest';

export const setAction = createAction(
  'workout/action',
  (uniqueNum, type, weight, count, set, name) => {
    return { payload: { uniqueNum, type, weight, count, set, name } };
  },
);
// export const setTitleTime = createAction('workout/title', (title, time) => {
//   return { payload: { title, time } };
// });
export const deleteAction = createAction('workout/deleteAction', uniqueNum => {
  return { payload: { uniqueNum } };
});
export const getMyWorkoutList = createAsyncThunk(
  'workout/getMyWorkoutList',
  async (userId, title) => {
    try {
      const res = makeRequest({
        method: 'GET',
        url: `/users/{userId}/workout-list/${title}`,
      });
      console.log(res.data);
      return res.data;
    } catch (e) {
      console.log('getMyWorkoutList error :', e);
      return {};
    }
  },
);
