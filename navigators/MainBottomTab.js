import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FollowTopTab from './FollowTopTab';
import CalendarScreen from '../screens/CalendarScreen';

const Tab = createBottomTabNavigator();

const MainBottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="FollowTopTab" component={FollowTopTab} />
    </Tab.Navigator>
  );
};

export default MainBottomTab;
