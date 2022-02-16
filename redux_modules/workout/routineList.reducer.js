import { createReducer } from '@reduxjs/toolkit';
import {
  setRoutineTimeAction,
  setRoutineListIdAction,
  setRoutineTitleAction,
  getMyRoutineList,
} from './routineList.action';

const initialState = {
  routineList: [{ exerciseId: 0, title: '', time: 0 }],
  loading: false,
  data: null,
  error: null,
};

const RoutineReducer = createReducer(initialState, {
  // [setRoutineTitleAction]: (state, action) => {
  //   const { title } = action.payload;
  //   state.title = title;
  // },
  // [setRoutineListIdAction]: (state, action) => {
  //   const { exerciseListId } = action.payload;
  //   state.exerciseListId = exerciseListId;
  // },
  // [setRoutineTimeAction]: (state, action) => {
  //   const { time } = action.payload;
  //   state.time = time;
  // },
  [getMyRoutineList.pending]: state => {
    state = { ...state, loading: true, data: null, error: null };
  },
  [getMyRoutineList.fulfilled]: (state, action) => {
    state.routineList = action.payload;
    state.loading = false;
  },
  [getMyRoutineList.rejected]: (state, action) => {
    state.error = action.error;
    state.loading = false;
  },
});

export default RoutineReducer;

export const selectRoutineList = state => state.RoutineReducer;
