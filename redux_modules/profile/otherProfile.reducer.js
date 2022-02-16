import { createReducer } from '@reduxjs/toolkit';
import { getOtherProfile, setFollowAction } from './otherProfile.action';

const initialState = {
  name: '',
  age: '',
  weight: '',
  height: '',
  follow: false,
  loading: false,
  data: null,
  error: null,
  profileState: false,
};

const otherProfileReducer = createReducer(initialState, {
  [getOtherProfile.pending]: state => {
    state = { ...state, loading: true, data: null, error: null };
  },
  [getOtherProfile.fulfilled]: (state, action) => {
    const { name, age, height, weight, profileStatus } = action.payload;
    state.name = name;
    state.age = age;
    state.height = height;
    state.weight = weight;
    state.profileStatus = profileStatus;
    state.data = action.payload;
    state.loading = false;
  },
  [getOtherProfile.rejected]: (state, action) => {
    state.error = action.error;
    state.loading = false;
  },
  [setFollowAction.type]: (state, action) => {
    state.follow = action.payload.follow;
  },
});

export default otherProfileReducer;
export const selectOtherProfile = state => state.otherProfile;
