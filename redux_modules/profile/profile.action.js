// profile 관리 액션 모듈입니다 react-redux toolkit 이 사용되었습니다

import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import makeRequest from '../../function/makeRequest';

export const SetNicknameAction = createAction(
  'profile/setNicknameAciton',
  nickname => {
    return { payload: { nickname } };
  },
);

export const setAgeAction = createAction('profile/setAgeAction', age => {
  return { payload: { age } };
});

export const setWeightAciton = createAction('profile/setWeight', weight => {
  return { payload: { weight } };
});

export const setHeightAciton = createAction('profile/setHeight', height => {
  return { payload: { height } };
});

export const setFollowAction = createAction('profile/setFollow', follow => {
  return { payload: { follow } };
});

export const setProfileStateAciton = createAction(
  'profile/setProfileState',
  profileState => {
    return { payload: { profileState } };
  },
);
export const getMyProfile = createAsyncThunk(
  'myProfile/getMyProfile',
  async () => {
    try {
      const res = makeRequest({ method: 'GET', url: '/users/profile/me' });
      console.log('myProfile: ', res.data);
      return res.data;
    } catch (error) {
      console.log('myProfile', error);
      return {};
    }
  },
);
