import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootStack from './screens/RootStack';
import rootReducer from './redux_modules';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
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
