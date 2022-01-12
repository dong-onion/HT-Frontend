import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SignUpStack from './screens/SignUpStack';
import SignInStack from './screens/SignInStack';

const App = () => {
  return (
    <NavigationContainer>
      {/* <SignUpStack /> */}
      <SignInStack />
    </NavigationContainer>
  );
};

export default App;
