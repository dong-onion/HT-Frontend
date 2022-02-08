import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CardButton from './CardButton';

const TodoCard = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.nameText}>팔굽혀펴기</Text>
      <Text style={styles.countText}>10회</Text>
      <Text style={styles.timeText}>0분 0초</Text>
      <CardButton style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '95%',
    height: 60,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 4,
    alignItems: 'center',
  },
  block: {},
  nameText: { fontSize: 18, paddingLeft: 10 },
  countText: { paddingLeft: 20 },
  timeText: { fontSize: 15, marginLeft: 'auto' },
  button: { marginLeft: 10, marginRight: 10 },
});

export default TodoCard;
