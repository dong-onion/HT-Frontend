/* 1월 7일 허준서
회원가입 첫번쨰 화면입니다. */

import React, { useState } from 'react';
import MaterialInput from '../components/MaterialInput';
import { StyleSheet } from 'react-native';
import MaterialButton from '../components/MaterialButton';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSelector, useDispatch } from 'react-redux';
import { setEmail, setPassword } from '../redux_modules/signup';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [localEmail, setLocalId] = useState('');
  const [localPassword, setLocalPassword] = useState('');
  const [localPasswordRetype, setLocalPasswordRetype] = useState('');

  const dispatch = useDispatch();
  const signupState = useSelector((state) => state.signup);

  const onPress = () => {
    dispatch(setEmail(localEmail));
    dispatch(setPassword(localPassword));
    console.log(signupState);
    navigation.navigate('SignUpScreen-Second');
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.block}>
      <MaterialInput
        label="E-Mail"
        placeholder="이메일을 입력해주세요."
        caption="이미 가입되어 있는 이메일입니다."
        value={localEmail}
        onChangeText={(text) => {
          setLocalId(text);
        }}
      />
      <MaterialInput
        label="Password"
        placeholder="비밀번호를 입력해주세요."
        caption="유효하지 않은 비밀번호입니다."
        value={localPassword}
        onChangeText={(text) => {
          setLocalPassword(text);
        }}
      />
      <MaterialInput
        label="Re-type Password"
        placeholder="비밀번호 확인"
        caption="비밀번호가 일치하지 않습니다."
        value={localPasswordRetype}
        onChangeText={(text) => {
          setLocalPasswordRetype(text);
        }}
      />
      <MaterialButton onPress={onPress}>다음으로</MaterialButton>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  block: {
    height: 600,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default SignUpScreen;
