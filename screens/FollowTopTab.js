/* 1월 13일 허준서
팔로워/팔로우 리스트를 보여주는 top tab 네비게이터입니다. */

import React from 'react';
import FollowerScreen from './FollowerScreen';
import FollowingScreen from './FollowingScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function FollowTopTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Follower"
        component={FollowerScreen}
        options={{ title: '팔로워' }}
      />
      <Tab.Screen
        name="Following"
        component={FollowingScreen}
        options={{ title: '팔로잉' }}
      />
    </Tab.Navigator>
  );
}

export default FollowTopTab;
