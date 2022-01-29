// 루트 리듀서입니다.

import { combineReducers } from 'redux';
import signUp from './signUp';
import signUpAPI from './signUpAPI';
import profileImage from './profileImage';
import reducer from './profile/profile.reducer';
import otherProfileReducer from './profile/otherProfile.reducer';

const rootReducer = combineReducers({
  signUp,
  signUpAPI,
  profileImage,
  profile: reducer,
  otherProfile: otherProfileReducer,
});

export default rootReducer;
