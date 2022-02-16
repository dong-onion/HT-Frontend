// profile 관리 리듀서 모듈입니다 react-redux toolkit 이 사용되었습니다

import { createReducer } from '@reduxjs/toolkit';
import {
  setProfileStateAciton,
  setAgeAction,
  setFollowAction,
  setHeightAciton,
  SetNameAction,
  setWeightAciton,
  getMyProfile,
} from './profile.action';

const initialState = {
  name: '',
  age: '',
  weight: '',
  height: '',
  profileState: false,
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
  [SetNameAction.type]: (state, action) => {
    const { name } = action.payload;
    state.name = name;
  },
  [setWeightAciton.type]: (state, action) => {
    const { weight } = action.payload;
    state.weight = weight;
  },
  [setHeightAciton.type]: (state, action) => {
    const { height } = action.payload;
    state.height = height;
  },
  [setProfileStateAciton.type]: (state, action) => {
    const { profileState } = action.payload;
    state.profileState = profileState;
  },
  [setFollowAction.type]: (state, action) => {
    const { follow } = action.payload;
    state.follow = follow;
  },
  [getMyProfile.pending]: state => {
    state = { ...state, loading: true, data: null, error: null };
  },
  [getMyProfile.fulfilled]: (state, action) => {
    const { name, age, height, weight, profileState } = action.payload;
    state.name = name;
    state.age = age;
    state.height = height;
    state.weight = weight;
    state.profileState = profileState;
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
