import { createReducer } from '@reduxjs/toolkit';
import { deleteAction, getMyWorkoutList, setAction } from './workout.action';

const initialState = {
  actions: [],
  loading: false,
  data: null,
  error: null,
};

const workoutReducer = createReducer(initialState, {
  [setAction.type]: (state, action) => {
    const { uniqueNum, type, name, weight, count, set } = action.payload;
    state.actions = [
      ...state.actions,
      { uniqueNum, type, name, weight, count, set },
    ];
  },

  [deleteAction.type]: (state, action) => {
    const { uniqueNum } = action.payload;
    state.actions = [...state.actions.filter(el => el.uniqueNum !== uniqueNum)];
  },
  [getMyWorkoutList.pending]: state => {
    state = { ...state, loading: true, data: null, error: null };
  },
  [getMyWorkoutList.fulfilled]: (state, action) => {
    state.actions = [...action.payload];
    // const { id, name, type, weight, count, set } = action.payload;
    // state.actions = [...state.actions, { id, name, type, weight, count, set }];
    state.data = action.payload;
  },
  [getMyWorkoutList.rejected]: (state, action) => {
    state.error = action.error;
    state.loading = false;
  },
});

export default workoutReducer;

export const selectActions = state => state.workout.actions;
