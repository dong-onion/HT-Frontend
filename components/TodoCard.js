import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CardButton from './CardButton';

const TodoCard = ({ style, name, count, set, timer }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.countText}>{count + '회'}</Text>
      <Text style={styles.setText}>{set + '세트'}</Text>
      <Text style={styles.timeText}>{timer + '초'}</Text>
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
  setText: { paddingLeft: 10 },
  timeText: { fontSize: 15, marginLeft: 'auto' },
  button: { marginLeft: 10, marginRight: 10 },
});

export default TodoCard;
