import ReduxThunk from 'redux-thunk';
import rootReducer from './redux_modules';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: rootReducer,
  middleware: [ReduxThunk],
});

export default store;
