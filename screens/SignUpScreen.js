/*
허준서 22-01-07
회원가입 화면
*/
import React from 'react';
import MaterialInput from '../components/MaterialInput';
import { View, StyleSheet } from 'react-native';
import MaterialButton from '../components/MaterialButton';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Sign Up-Next');
  };
  return (
    <View style={styles.block}>
      <MaterialInput
        label="ID"
        placeholder="아이디를 입력해주세요."
        caption="중복된 아이디입니다."
      />
      <MaterialInput
        label="Password"
        placeholder="비밀번호를 입력해주세요."
        caption="유효하지 않은 비밀번호입니다."
      />
      <MaterialInput
        label="Re-type Password"
        placeholder="비밀번호 확인"
        caption="비밀번호가 일치하지 않습니다."
      />
      <MaterialButton onPress={onPress}>다음으로</MaterialButton>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
});

export default SignUpScreen;
