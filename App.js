import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import SignUpStack from './screens/SignUpStack';
// import SignInStack from './screens/SignInStack';

import RootStack from './screens/RootStack';

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
