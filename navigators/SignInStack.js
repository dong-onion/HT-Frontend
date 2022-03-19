import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import JsonScreen from '../screens/JsonScreen';
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
      
      <Stack.Screen name="JsonScreen" component={JsonScreen} />
    </Stack.Navigator>
  );
};

export default SignInStack;
