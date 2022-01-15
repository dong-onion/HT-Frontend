import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './SignInScreen';

const Stack = createNativeStackNavigator();
const SignInStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="signIn"
        options={{ headerShown: false }}
        component={SignInScreen}
      />
    </Stack.Navigator>
  );
};

export default SignInStack;
