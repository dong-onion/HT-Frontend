/* 1월 13일 허준서 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpStack from './SignUpStack';
import SignInScreen from './SignInScreen';
import FollowTopTab from './FollowTopTab';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpStack" component={SignUpStack} />
      <Stack.Screen name="FollowTopTab" component={FollowTopTab} />
    </Stack.Navigator>
  );
};

export default RootStack;
