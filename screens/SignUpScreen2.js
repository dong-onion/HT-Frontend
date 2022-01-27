/* 1월 7일 허준서
회원가입 두번째 화면입니다. */

import React, { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MaterialButton from '../components/MaterialButton';
import ProfileImage from '../components/ProfileImage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { FilledTextField } from 'rn-material-ui-textfield';
import { Picker } from '@react-native-picker/picker';

const SignUpScreen2 = () => {
  const navigation = useNavigation();

  const [nickname, setNickname] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState();

  const nameField = useRef();

  const onPress = () => {
    navigation.navigate('FollowTopTab');
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <ProfileImage style={styles.profile} />
      <View style={styles.input}>
        <FilledTextField
          autoCapitalize="none"
          autoCorrect={false}
          enablesReturnKeyAutomatically={true}
          returnKeyType="next"
          label="Name"
        />
      </View>
      <View style={styles.input}>
        <FilledTextField
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          enablesReturnKeyAutomatically={true}
          returnKeyType="next"
          label="Age"
        />
      </View>
      <View style={[styles.input, styles.border]}>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="남자" value="java" />
          <Picker.Item label="여자" value="js" />
        </Picker>
      </View>
      <View style={styles.input}>
        <FilledTextField
          autoCapitalize="none"
          autoCorrect={false}
          enablesReturnKeyAutomatically={true}
          returnKeyType="next"
          label="Height"
        />
      </View>
      <View style={styles.input}>
        <FilledTextField
          autoCapitalize="none"
          autoCorrect={false}
          enablesReturnKeyAutomatically={true}
          returnKeyType="next"
          label="Weight"
        />
      </View>
      <MaterialButton style={styles.button} onPress={onPress}>
        회원가입 완료
      </MaterialButton>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
    height: 600,
  },
  profile: {
    alignSelf: 'center',
  },
  button: {
    marginTop: 'auto',
    alignSelf: 'center',
  },
  input: {
    marginTop: 20,
  },
  border: {
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default SignUpScreen2;
