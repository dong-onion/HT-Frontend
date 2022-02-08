import React from 'react';
import TodoCard from './TodoCard';
import { View, StyleSheet } from 'react-native';

const list = [1, 2, 3];

const TodoList = () => {
  return (
    <View style={styles.container}>
      {list.map((item, index) => (
        <TodoCard style={styles.card} key={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  card: { marginBottom: 10 },
});

export default TodoList;
