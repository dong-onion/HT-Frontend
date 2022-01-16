/* 모든 화면들의 루트 스택입니다. */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpStack from './SignUpStack';
import SignInStack from './SignInStack';
import FollowTopTab from './FollowTopTab';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignInStack" component={SignInStack} />
      <Stack.Screen name="SignUpStack" component={SignUpStack} />
      <Stack.Screen name="FollowTopTab" component={FollowTopTab} />
    </Stack.Navigator>
  );
};

export default RootStack;
