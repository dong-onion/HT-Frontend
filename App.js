import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootStack from './screens/RootStack';
import rootReducer from './redux_modules';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);
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
