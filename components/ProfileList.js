import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FixProfileInput from './FixProfileInput';

const ProfileList = ({ label, data, text }) => {
  const [onFix, setOnFix] = useState(false);
  const [changed, setChanged] = useState(false);
  const [newText, setNewText] = useState(text);
  const textInputFix = () => {
    setOnFix(true);
  };

  const isFix = () => {
    setOnFix(!onFix);
    setChanged(true);
  };
  useEffect(() => {}, [data]);
  return (
    <View style={styles.inputBox}>
      {onFix ? (
        <>
          <Text style={styles.text}>{label}</Text>
          <FixProfileInput
            isFix={isFix}
            // data={data}
            // value={setNewText}
          />
        </>
      ) : (
        <>
          <Text style={styles.text}>{label}</Text>
          {changed ? (
            <Text style={styles.text2}>{/*newText*/}</Text>
          ) : (
            <Text style={styles.text2}>{/*text*/}</Text>
          )}

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
