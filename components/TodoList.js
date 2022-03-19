import React, { useEffect, useState, useRef } from 'react';
import TodoCard from './TodoCard';
import { View, StyleSheet, Button } from 'react-native';

const TodoList = ({ workout, setWorkout }) => {
  const timerId = useRef(null);
  const callback = useRef(null);

  useEffect(() => {
    const tick = id => {
      setTime(id, workout[id].time + 1);
    };
    callback.current = tick;
  });

  const startTimer = id => {
    timerId.current = setInterval(() => {
      const tick = callback.current;
      tick(id);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
  };

  const setTime = (id, time) => {
    setWorkout(
      workout.map((item, index) => (index === id ? { ...item, time } : item)),
    );
  };

  return (
    <View style={styles.container}>
      {workout?.map((item, index) => (
        <TodoCard
          style={styles.card}
          key={index}
          id={index}
          name={item.name}
          count={item.count}
          set={item.set}
          time={item.time}
          startTimer={startTimer}
          stopTimer={stopTimer}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  card: { marginBottom: 10 },
});

export default TodoList;
