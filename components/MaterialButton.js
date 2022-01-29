// 회원가입 화면에서 사용하려고 만든 버튼입니다.

import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

const MaterialButton = ({ children, onPress, marginB, style }) => {
  return (
    <Pressable
      style={[styles.block, marginB && styles.marginB, style]}
      android_ripple={{ color: 'gray' }}
      onPress={onPress}>
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
  marginB: {
    marginBottom: 20,
  },
});

export default MaterialButton;
