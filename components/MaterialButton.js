import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

const MaterialButton = ({ children, onPress }) => {
  return (
    <Pressable
      style={styles.block}
      android_ripple={{ color: 'gray' }}
      onPress={onPress}
    >
      <Text>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  block: {
    width: 250,
    height: 45,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MaterialButton;
