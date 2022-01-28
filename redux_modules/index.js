// 루트 리듀서입니다.

import { combineReducers } from 'redux';
import signup from './signup';
import reducer from './profile/profile.reducer';
import otherProfileReducer from './profile/otherProfile.reducer';

const rootReducer = combineReducers({
  signup,
  profile: reducer,
  otherProfile: otherProfileReducer,
});

export default rootReducer;
