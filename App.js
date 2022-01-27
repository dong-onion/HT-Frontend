import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './screens/RootStack';
import rootReducer from './redux_modules';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ reducer: rootReducer });
console.log(store.getState());

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
