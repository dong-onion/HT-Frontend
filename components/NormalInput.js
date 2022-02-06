import { StyleSheet, View, TextInput, Text } from 'react-native';

import React from 'react';

const NormalInput = ({
  placeholder,
  onChangeText,
  value,
  keyboardType,
  children,
}) => {
  return (
    <View style={styles.body}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
      />
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: 320,
    backgroundColor: 'white',
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#00D1FF',
    fontSize: 14,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text: {
    fontSize: 18,
  },
});
export default NormalInput;
