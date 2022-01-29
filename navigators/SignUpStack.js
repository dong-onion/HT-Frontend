// 두 개의 회원가입 화면을 관리하는 스택네비게이터입니다.

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen1 from '../screens/SignUpScreen1';
import SignUpScreen2 from '../screens/SignUpScreen2';
import { SignUpContextProvider } from '../components/SignUpContext';
import ProfileImage from '../components/ProfileImage';

const Stack = createNativeStackNavigator();

const SignUpStack = () => {
  return (
    <SignUpContextProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="SignUpScreen-First"
          component={SignUpScreen1}
          options={{ title: '회원가입' }}
        />
        <Stack.Screen
          name="SignUpScreen-Second"
          component={SignUpScreen2}
          options={{ title: '회원가입' }}
        />
        <Stack.Screen name="ProfileImg" component={ProfileImage} />
      </Stack.Navigator>
    </SignUpContextProvider>
  );
};

export default SignUpStack;
