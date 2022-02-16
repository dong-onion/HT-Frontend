import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FollowTopTab from './FollowTopTab';
import CalendarScreen from '../screens/CalendarScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const MainBottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          title: '캘린더',
          tabBarIcon: ({ color, size }) => (
            <Icon name="assignment" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="FollowTopTab"
        component={FollowTopTab}
        options={{
          title: '팔로워/팔로잉',
          tabBarIcon: ({ color, size }) => (
            <Icon name="favorite-border" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainBottomTab;
