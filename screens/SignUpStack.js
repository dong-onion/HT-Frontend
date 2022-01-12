/* 1월 8일 허준서
스택네비게이터
두 개의 회원가입 화면을 관리하는 스택네비게이터입니다. */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen1 from './SignUpScreen1';
import SignUpScreen2 from './SignUpScreen2';
import { SignUpContextProvider } from '../components/SignUpContext';
import SignInScreen from './SignInScreen';

const Stack = createNativeStackNavigator();

const SignUpStack = () => {
  return (
    <SignUpContextProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="signIn"
          options={{ headerShown: false }}
          component={SignInScreen}
        />
        <Stack.Screen name="signUp" component={SignUpScreen1} />
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
      </Stack.Navigator>
    </SignUpContextProvider>
  );
};

export default SignUpStack;
