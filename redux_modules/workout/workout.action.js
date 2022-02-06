import { createAction } from '@reduxjs/toolkit';

export const setAction = createAction(
  'workout/action',
  (id, part, weight, count, set, name) => {
    return { payload: { id, part, weight, count, set, name } };
  },
);
export const deleteAction = createAction('workout/deleteAction', id => {
  return { payload: { id } };
});
