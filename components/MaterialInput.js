/*
허준서 22-01-07
회원가입 화면에 쓰이는 인풋 UI
*/
import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const MaterialInput = ({
  label,
  placeholder,
  children,
  caption,
  value,
  onChangeText,
}) => {
  return (
    <View>
      <View style={styles.block}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
        >
          {children}
        </TextInput>
      </View>
      <Text style={styles.caption}>{caption}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    width: 300,
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#1BB55C',
  },
  label: {
    top: -12,
    left: 12,
    position: 'absolute',
    color: '#1BB55C',
    fontSize: 12,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 2,
    borderRadius: 10,
  },
  input: {
    paddingStart: 10,
  },
  caption: {
    fontSize: 12,
    paddingRight: 3,
    paddingTop: 3,
    alignSelf: 'flex-end',
  },
});

export default MaterialInput;
