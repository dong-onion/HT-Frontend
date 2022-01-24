// 루트 리듀서입니다.

import { combineReducers } from 'redux';
import signUpInfo from './signUp';

const rootReducer = combineReducers({ signUpInfo });

export default rootReducer;
