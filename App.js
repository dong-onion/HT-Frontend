import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './navigators/RootStack';
import store from './redux_modules/store';
import { Provider } from 'react-redux';

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
