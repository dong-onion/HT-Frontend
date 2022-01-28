import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './SignInScreen';
import ProfileScreen from './ProfileScreen';
import MyProfileScreen from './MyProfileScreen';
import JsonScreen from './JsonScreen';
const Stack = createNativeStackNavigator();
const SignInStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="signIn"
        options={{ headerShown: false }}
        component={SignInScreen}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: '프로필' }}
      />
      <Stack.Screen
        name="MyProfile"
        component={MyProfileScreen}
        options={{ title: '내 프로필' }}
      />
      <Stack.Screen name="JsonScreen" component={JsonScreen} />
    </Stack.Navigator>
  );
};

export default SignInStack;
