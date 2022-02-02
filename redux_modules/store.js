import ReduxThunk from 'redux-thunk';
import rootReducer from './index';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: rootReducer,
  middleware: [ReduxThunk],
});

export default store;
