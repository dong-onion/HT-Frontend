import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CardButton from './CardButton';

const TodoCard = ({
  style,
  name,
  count,
  set,
  time,
  startTimer,
  stopTimer,
  id,
}) => {
  const [isRunning, setIsRunning] = useState(false);
  const [localTime, setLocalTime] = useState(0);

  const onPress = () => {
    if (isRunning) {
      stopTimer();
      setIsRunning(false);
    } else {
      startTimer(id);
      setIsRunning(true);
    }
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.countText}>{count + '회'}</Text>
      <Text style={styles.setText}>{set + '세트'}</Text>
      <Text style={styles.timeText}>{time + '초'}</Text>
      {isRunning ? (
        <CardButton style={styles.button} onPress={onPress} text="중지" />
      ) : (
        <CardButton style={styles.button} onPress={onPress} text="시작" />
      )}
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
