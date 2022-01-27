// profile 관리 리듀서 모듈입니다 react-redux toolkit 이 사용되었습니다

import { createReducer } from '@reduxjs/toolkit';
import {
  setActivateAciton,
  setAgeAction,
  setFollowAction,
  setHeightAciton,
  SetNicknameAction,
  setWeightAciton,
  getMyProfile,
} from './profile.action';

const initialState = {
  nickname: '',
  age: '',
  weight: '',
  height: '',
  activate: false,
  loading: false,
  data: null,
  error: null,
};

const reducer = createReducer(initialState, {
  [setAgeAction.type]: (state, action) => {
    const { age } = action.payload;
    state.age = age;
    // state.age = action.payload.age;
  },
  [SetNicknameAction.type]: (state, action) => {
    const { nickname } = action.payload;
    state.nickname = nickname;
  },
  [setWeightAciton.type]: (state, action) => {
    const { weight } = action.payload;
    state.weight = weight;
  },
  [setHeightAciton.type]: (state, action) => {
    const { height } = action.payload;
    state.height = height;
  },
  [setActivateAciton.type]: (state, action) => {
    const { activate } = action.payload;
    state.activate = activate;
  },
  [setFollowAction.type]: (state, action) => {
    const { follow } = action.payload;
    state.follow = follow;
  },
  [getMyProfile.pending]: state => {
    state = { ...state, loading: true, data: null, error: null };
  },
  [getMyProfile.fulfilled]: (state, action) => {
    const { nickname, age, height, weight, activate } = action.payload;
    state.nickname = nickname;
    state.age = age;
    state.height = height;
    state.weight = weight;
    state.activate = activate;
    state.data = action.payload;
    state.loading = false;
  },
  [getMyProfile.rejected]: (state, action) => {
    state.error = action.error;
    state.loading = false;
  },
});

export default reducer;

export const selectProfile = state => state.profile;
