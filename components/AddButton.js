import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';

const AddButton = ({ style }) => {
  return (
    <Pressable style={[styles.container, style]}>
      <Text style={styles.text}>추가하기</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3498DB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});

export default AddButton;
