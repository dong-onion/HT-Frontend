import { createReducer } from '@reduxjs/toolkit';
import { deleteAction, getMyWorkoutList, setAction } from './workout.action';

const initialState = {
  actions: [
    {
      type: '',
      weight: 0,
      name: '',
      count: 0,
      set: 0,
    },
  ],
  loading: false,
  data: null,
  error: null,
};

const workoutReducer = createReducer(initialState, {
  [setAction.type]: (state, action) => {
    const { type, name, weight, count, set } = action.payload;
    state.actions = [...state.actions, { type, name, weight, count, set }];
  },

  [deleteAction.type]: (state, action) => {
    const { exerciseHistoryId } = action.payload;
    state.actions = [
      ...state.actions.filter(el => el.exerciseHistoryId !== exerciseHistoryId),
    ];
  },
  [getMyWorkoutList.pending]: state => {
    state = { ...state, loading: true, data: null, error: null };
  },
  [getMyWorkoutList.fulfilled]: (state, action) => {
    state.actions = [...action.payload];
    state.data = action.payload;
  },
  [getMyWorkoutList.rejected]: (state, action) => {
    state.error = action.error;
    state.loading = false;
  },
});

export default workoutReducer;

export const selectActions = state => state.workout.actions;
