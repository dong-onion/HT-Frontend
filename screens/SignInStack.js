import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './SignInScreen';
import ExampleSignUp from './ExampleSignUp';

const Stack = createNativeStackNavigator();
const SignInStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="signIn"
        options={{ headerShown: false }}
        component={SignInScreen}
      />
      <Stack.Screen name="signUp" component={ExampleSignUp} />
    </Stack.Navigator>
  );
};

export default SignInStack;
