import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from '../screens/SplashScreen';
import SplashScreen2 from '../screens/SplashScreen2';
const Stack = createNativeStackNavigator();

const SplashStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SplashScreen2" component={SplashScreen2} />
    </Stack.Navigator>
  );
};

export default SplashStack;
