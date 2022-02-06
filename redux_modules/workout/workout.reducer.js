import { createReducer } from '@reduxjs/toolkit';
import { deleteAction, setAction } from './workout.action';

const initialState = {
  actions: [
    {
      id: Date.now(),
      part: '목',
      name: 'bench',
      weight: 100,
      count: 12,
      set: 10,
    },
  ],
};

const workoutReducer = createReducer(initialState, {
  [setAction.type]: (state, action) => {
    const { id, part, name, weight, count, set } = action.payload;
    state.actions = [...state.actions, { id, part, name, weight, count, set }];
  },
  [deleteAction.type]: (state, action) => {
    const { id } = action.payload;
    state.actions = [...state.actions.filter(el => el.id !== id)];
  },
});

export default workoutReducer;

export const selectActions = state => state.workout.actions;
