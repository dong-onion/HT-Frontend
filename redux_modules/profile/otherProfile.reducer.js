import { createReducer } from '@reduxjs/toolkit';
import { getOtherProfile, setFollowAction } from './otherProfile.action';
import { fetchJson } from './otherProfile.action';

const initialState = {
  nickname: '',
  age: '',
  weight: '',
  height: '',
  follow: false,
  loading: false,
  data: null,
  error: null,
};

const otherProfileReducer = createReducer(initialState, {
  [getOtherProfile.pending]: state => {
    state = { ...state, loading: true, data: null, error: null };
  },
  [getOtherProfile.fulfilled]: (state, action) => {
    const { nickname, age, height, weight, activate } = action.payload;
    state.nickname = nickname;
    state.age = age;
    state.height = height;
    state.weight = weight;
    state.activate = activate;
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
  [fetchJson.pending]: state => {
    state = { loading: true, data: null, error: null };
  },
  [fetchJson.fulfilled]: (state, action) => {
    state.data = action.payload;
    state.loading = false;
  },
  [fetchJson.rejected]: (state, action) => {
    state.error = action.error;
    state.loading = false;
  },
});

export default otherProfileReducer;
export const selectOtherProfile = state => state.otherProfile;
