// profile 관리 리듀서 모듈입니다 react-redux toolkit 이 사용되었습니다

import { createReducer } from '@reduxjs/toolkit';
import {
  setActivateAciton,
  setAgeAction,
  setHeightAciton,
  SetNicknameAction,
  setWeightAciton,
} from './profile.action';

const initialState = {
  nickname: '',
  age: '',
  weight: '',
  height: '',
  activate: false,
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
});

export default reducer;

export const selectProfile = state => state.profile;
