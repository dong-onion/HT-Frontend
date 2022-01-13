import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SignUpStack from './screens/SignUpStack';

const App = () => {
  return (
    <NavigationContainer>
      <SignUpStack />
    </NavigationContainer>
  );
};

export default App;
