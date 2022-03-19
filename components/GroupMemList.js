import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
const GroupMemList = ({ name }) => {
  useEffect(() => {
    console.log('name : ', name);
  }, []);
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default GroupMemList;
