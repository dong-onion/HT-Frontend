/* 1월 7일 허준서
회원가입 첫번째 화면입니다. */

import React, { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MaterialButton from '../components/MaterialButton';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';
import { setEmail, setPassword } from '../redux_modules/signUp';
import { TextField, FilledTextField } from 'rn-material-ui-textfield';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [localEmail, setLocalEmail] = useState('');
  const [localPassword, setLocalPassword] = useState('');
  const [localPasswordRetype, setLocalPasswordRetype] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    passwordRetype: '',
  });

  const emailField = useRef();
  const passwordField = useRef();
  const passwordRetype = useRef();

  const dispatch = useDispatch();

  const onPress = () => {
    // 이메일 유효성 확인
    if (!localEmail) {
      const e = { ...errors, email: '이메일을 입력해주세요.' };
      setErrors(e);
    }
    // 비밀번호 유효성 확인
    else if (!localPassword) {
      const e = { ...errors, password: '비밀번호를 입력해주세요.' };
      setErrors(e);
    }
    // 비밀번호 재입력 확인
    else if (localPassword !== localPasswordRetype) {
      const e = { ...errors, passwordRetype: '비밀번호가 일치하지 않습니다.' };
      setErrors(e);
    } else {
      // 다음화면으로
      dispatch(setEmail(localEmail));
      dispatch(setPassword(localPassword));
      navigation.navigate('SignUpScreen-Second');
    }
  };

  const onSubmitEmail = () => {
    passwordField.current.focus();
  };

  const onSubmitPassword = () => {
    passwordRetype.current.focus();
  };

  const onFocusEmail = () => {
    setErrors({
      ...errors,
      email: '',
    });
  };

  const onFocusPassword = () => {
    setErrors({
      ...errors,
      password: '',
    });
  };

  const onFocusPasswordRetype = () => {
    setErrors({
      ...errors,
      passwordRetype: '',
    });
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View style={styles.input}>
        <FilledTextField
          ref={emailField}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          enablesReturnKeyAutomatically={true}
          returnKeyType="next"
          label="Email Address"
          onSubmitEditing={onSubmitEmail}
          onChangeText={setLocalEmail}
          error={errors.email}
          onFocus={onFocusEmail}
          value={localEmail}
        />
      </View>
      <View style={styles.input}>
        <TextField
          ref={passwordField}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          enablesReturnKeyAutomatically={true}
          clearTextOnFocus={true}
          returnKeyType="next"
          label="Password"
          title=""
          maxLength={20}
          characterRestriction={20}
          onSubmitEditing={onSubmitPassword}
          onChangeText={setLocalPassword}
          error={errors.password}
          onFocus={onFocusPassword}
          value={localPassword}
        />
      </View>
      <View style={styles.input}>
        <TextField
          ref={passwordRetype}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          enablesReturnKeyAutomatically={true}
          clearTextOnFocus={true}
          returnKeyType="done"
          label="Re-type password"
          title=""
          maxLength={20}
          characterRestriction={20}
          onChangeText={setLocalPasswordRetype}
          error={errors.passwordRetype}
          onFocus={onFocusPasswordRetype}
          value={localPasswordRetype}
        />
      </View>
      <MaterialButton style={styles.button} onPress={onPress}>
        다음으로
      </MaterialButton>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: 600,
  },
  button: {
    marginTop: 'auto',
    alignSelf: 'center',
  },
  input: { marginTop: 10 },
});

export default SignUpScreen;
