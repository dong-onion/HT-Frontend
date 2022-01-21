// 루트 리듀서입니다.

import { combineReducers } from 'redux';
import signup from './signup';

const rootReducer = combineReducers({ signup });

export default rootReducer;
