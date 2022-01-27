import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FixProfileInput from './FixProfileInput';

const ProfileList = ({ label, text, onModify }) => {
  const [onFix, setOnFix] = useState(false);
  const textInputFix = () => {
    setOnFix(true);
  };

  return (
    <View style={styles.inputBox}>
      {onFix ? (
        <>
          <Text style={styles.text}>{label}</Text>
          <FixProfileInput
            onFix={newText => {
              setOnFix(false);
              onModify(newText);
            }}
          />
        </>
      ) : (
        <>
          <Text style={styles.text}>{label}</Text>
          <Text style={styles.text2}>{text}</Text>

          {/* age, nickName */}
          <TouchableOpacity style={styles.fixOpa} onPress={textInputFix}>
            <Text>수정</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  inputBox: {
    paddingHorizontal: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#00D1FF',
    marginHorizontal: 50,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
    height: 80,
  },
  text: {
    color: 'black',
    flexGrow: 5,
  },
  text2: {
    color: 'black',
    flexGrow: 1,
  },
  fixOpa: {
    flexGrow: 1,
    backgroundColor: '#ede7f6',
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});

export default ProfileList;
