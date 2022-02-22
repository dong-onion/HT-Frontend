import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchGroup from '../screens/SearchGroup';
import SetGroup from '../screens/SetGroup';

const Tab = createMaterialTopTabNavigator();

const GroupTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="그룹찾기" component={SearchGroup} />
      <Tab.Screen name="그룹관리" component={SetGroup} />
    </Tab.Navigator>
  );
};

export default GroupTab;
