// 루트 리듀서입니다.

import { combineReducers } from 'redux';
import signUp from './signUp';
import signUpAPI from './signUpAPI';
import profileImage from './profileImage';
import reducer from './profile/profile.reducer';
import otherProfileReducer from './profile/otherProfile.reducer';
import workoutReducer from './workout/workout.reducer';
import day from './day';
import calendar from './calendar';

const rootReducer = combineReducers({
  signUp,
  signUpAPI,
  profileImage,
  day,
  calendar,
  profile: reducer,
  otherProfile: otherProfileReducer,
  workout: workoutReducer,
});

export default rootReducer;
