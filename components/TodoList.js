import React from 'react';
import TodoCard from './TodoCard';
import { View, StyleSheet } from 'react-native';

const TodoList = ({ workout }) => {
  return (
    <View style={styles.container}>
      {workout?.map((item, index) => (
        <TodoCard
          style={styles.card}
          key={item.name}
          name={item.name}
          count={item.count}
          set={item.set}
          time={item.timer}
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
