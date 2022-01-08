import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MaterialButton from '../components/MaterialButton';
import MaterialInput from '../components/MaterialInput';
import ProfileImage from '../components/ProfileImage';
import { SignUpContext } from '../components/SignUpContext';

const SignUpScreen2 = () => {
  const { signUpInfo, updateSignUpInfo } = useContext(SignUpContext);

  const [nickName, setNickName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const onPress = () => {
    updateSignUpInfo({ nickName, age, weight, height });
  };

  return (
    <View style={styles.block}>
      <ProfileImage />
      <MaterialInput
        label="닉네임"
        placeholder="닉네임을 입력해주세요."
        caption="중복된 닉네임입니다."
        value={nickName}
        onChangeText={setNickName}
      />
      <MaterialInput
        label="나이"
        placeholder="나이를 입력해주세요."
        value={age}
        onChangeText={setAge}
      />
      <MaterialInput
        label="체중"
        placeholder="체중을 입력해주세요."
        value={weight}
        onChangeText={setWeight}
      />
      <MaterialInput
        label="신장"
        placeholder="신장을 입력해주세요."
        value={height}
        onChangeText={setHeight}
      />
      <MaterialButton onPress={onPress}>회원가입 완료</MaterialButton>
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

export default SignUpScreen2;
