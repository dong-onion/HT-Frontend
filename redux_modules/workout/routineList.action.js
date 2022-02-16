import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import makeRequest from '../../function/makeRequest';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setRoutineTitleAction = createAction(
  'workout/routineListTitle',
  title => {
    return { payload: { title } };
  },
);
export const setRoutineListIdAction = createAction(
  'workout/routineListId',
  exerciseListId => {
    return { payload: { exerciseListId } };
  },
);
export const setRoutineTimeAction = createAction(
  'workout/routineListTime',
  time => {
    return { payload: { time } };
  },
);
export const getMyRoutineList = createAsyncThunk(
  'workout/getMyRoutineList',
  async () => {
    try {
      const MyUserId = await JSON.parse(AsyncStorage.getItem('MyUserId'));
      console.log('MyWorkout/MyUserId : ', MyUserId);
      const res = await makeRequest({
        method: 'GET',
        url: `/users/${MyUserId}/workout-list/all`,
      });
      console.log('MyWorkout/res.data', res.data);
      console.log('MyWorkout/res.result', res.result);
      return res.data;
    } catch (error) {
      console.log('getMyRoutineListAction Error :', error);
      return null;
    }
  },
);
