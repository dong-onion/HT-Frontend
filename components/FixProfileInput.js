import React, { useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const FixProfileInput = ({ isFix, data, value }) => {
  const [text, setText] = useState('');
  return (
    <View style={styles.inputBox}>
      <TextInput style={styles.input} value={text} onChangeText={setText} />
      <TouchableOpacity
        style={styles.fixOpa}
        onPress={() => {
          isFix(false);
          // data(text);
          // value(text);
        }}
      >
        <Text>확인</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  inputBox: {
    paddingHorizontal: 5,
    marginHorizontal: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    width: 150,
    borderWidth: 1,
    borderRadius: 14,
    borderColor: '#a1887f',
    marginRight: 20,
    paddingHorizontal: 10,
  },
  fixOpa: {
    backgroundColor: '#ede7f6',
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: 50,
  },
});
export default FixProfileInput;
