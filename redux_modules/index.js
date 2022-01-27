// 루트 리듀서입니다.

import { combineReducers } from 'redux';
import signUp from './signUp';
import signUpAPI from './signUpAPI';
import profileImage from './profileImage';

const rootReducer = combineReducers({ signUp, signUpAPI, profileImage });

export default rootReducer;
