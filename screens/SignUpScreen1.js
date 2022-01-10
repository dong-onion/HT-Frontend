/* 1월 7일 허준서
회원가입 첫번쨰 화면입니다.
react-native-keyboard-aware-scroll-view 라이브러리가 사용되었습니다. */

import React, { useContext, useState } from 'react';
import MaterialInput from '../components/MaterialInput';
import { StyleSheet } from 'react-native';
import MaterialButton from '../components/MaterialButton';
import { useNavigation } from '@react-navigation/native';
import { SignUpContext } from '../components/SignUpContext';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const { signUpInfo, updateSignUpInfo } = useContext(SignUpContext);

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRetype, setPasswordRetype] = useState('');

  const onPress = () => {
    updateSignUpInfo({ id, password });
    navigation.navigate('SignUpScreen-Second');
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.block}>
      <MaterialInput
        label="ID"
        placeholder="아이디를 입력해주세요."
        caption="중복된 아이디입니다."
        value={id}
        onChangeText={setId}
      />
      <MaterialInput
        label="Password"
        placeholder="비밀번호를 입력해주세요."
        caption="유효하지 않은 비밀번호입니다."
        value={password}
        onChangeText={setPassword}
      />
      <MaterialInput
        label="Re-type Password"
        placeholder="비밀번호 확인"
        caption="비밀번호가 일치하지 않습니다."
        value={passwordRetype}
        onChangeText={setPasswordRetype}
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
