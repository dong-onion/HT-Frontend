// profile 관리 액션 모듈입니다 react-redux toolkit 이 사용되었습니다

import {createAction} from '@reduxjs/toolkit';

export const SetNicknameAction = createAction(
  'profile/setNicknameAciton',
  nickname => {
    return {payload: {nickname}};
  },
);

export const setAgeAction = createAction('profile/setAgeAction', age => {
  return {payload: {age}};
});
export const setWeightAciton = createAction('profile/setWeight', weight => {
  return {payload: {weight}};
});
export const setHeightAciton = createAction('profile/setHeight', height => {
  return {payload: {height}};
});
export const setActivateAciton = createAction(
  'profile/setActivate',
  activate => {
    return {payload: {activate}};
  },
);
