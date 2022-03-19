import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FollowTopTab from './FollowTopTab';
import CalendarScreen from '../screens/CalendarScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IIcon from 'react-native-vector-icons/FontAwesome';
import GroupTab from './GroupTab';
import MyProfileScreen from '../screens/MyProfileScreen';
import WorkoutStack from './WorkoutStack';

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
      <Tab.Screen
        name="GroupTab"
        component={GroupTab}
        options={{
          title: '그룹',
          tabBarIcon: ({ color, size }) => (
            <IIcon name="group" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="WorkoutStack"
        component={WorkoutStack}
        options={{
          title: '운동리스트',
          tabBarIcon: ({ color, size }) => (
            <IIcon name="list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={MyProfileScreen}
        options={{
          title: '프로필',
          tabBarIcon: ({ color, size }) => (
            <IIcon name="user-secret" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainBottomTab;
