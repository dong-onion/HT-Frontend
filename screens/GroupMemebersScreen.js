import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GroupMemList from '../components/GroupMemList';
const GroupMemebersScreen = ({ route }) => {
  const [group, setGroup] = useState([]);

  useEffect(() => {
    setGroup(route.params.userList);
    console.log('params: ', route.params.userList);
    console.log('group :', group);
  }, []);
  useEffect(() => {
    console.log('group2 :', group);
  }, [group]);
  return (
    <View style={styles.container}>
      {group.length
        ? group.map(data => <GroupMemList name={data.name} />)
        : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default GroupMemebersScreen;
