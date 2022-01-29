/* 1월 7일 허준서
회원가입 첫번쨰 화면입니다. */

import React, { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MaterialButton from '../components/MaterialButton';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSelector, useDispatch } from 'react-redux';
import { setEmail, setPassword } from '../redux_modules/signup';
import { TextField, FilledTextField } from 'rn-material-ui-textfield';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [localEmail, setLocalEmail] = useState('');
  const [localPassword, setLocalPassword] = useState('');
  const [localPasswordRetype, setLocalPasswordRetype] = useState('');
  const [error, setError] = useState('');

  const emailField = useRef();
  const passwordField = useRef();
  const passwordRetype = useRef();

  const dispatch = useDispatch();
  const signupState = useSelector(state => state.signup);

  const onPress = () => {
    if (localPassword === localPasswordRetype) {
      setError('');

      dispatch(setEmail(localEmail));
      dispatch(setPassword(localPassword));
      console.log(signupState);
      navigation.navigate('SignUpScreen-Second');
    } else {
      setError('비밀번호가 일치하지 않습니다.');
    }
  };

  const onSubmitEmail = () => {
    passwordField.current.focus();
  };

  const onSubmitPassword = () => {
    passwordRetype.current.focus();
  };

  const onChangeEmail = text => {
    setLocalEmail(text);
  };

  const onChangePassword = text => {
    setLocalPassword(text);
  };

  const onChangePasswordRetype = text => {
    setLocalPasswordRetype(text);
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
          onChangeText={onChangeEmail}
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
          onChangeText={onChangePassword}
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
          onChangeText={onChangePasswordRetype}
          error={error}
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
