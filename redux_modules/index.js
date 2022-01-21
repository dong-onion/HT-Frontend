// 루트 리듀서입니다.

import {combineReducers} from 'redux';
import signup from './signup';
import reducer from './profile/profile.reducer';

const rootReducer = combineReducers({signup, profile: reducer});

export default rootReducer;
