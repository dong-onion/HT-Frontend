import axios from 'axios';
import React, { useRef, useState } from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TextInput,
  Alert,
  Keyboard,
} from 'react-native';
import MaterialButton from '../components/MaterialButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInScreen = ({ navigation }) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const emailBox = useRef();
  const pwBox = useRef();

  const onLogin = async () => {
    navigation.navigate('Profile');
    try {
      const response = await axios.post(
        'http://13.209.45.119:8080/auth/login',
        {
          email: id,
          password: pw,
        },
      );
      const token = response.data;
      if (token === null) {
        Alert('존재하지 않는 계정입니다');
      }
      AsyncStorage.setItem('token', token);
      // navigation.navigate('Profile');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSF47wqsidCX03_4tbYKljNlnYgzXHz0Z59A&usqp=CAU',
          }}
        />
        <Text style={styles.headerText}>운동</Text>
      </View>
      <View style={styles.logIn}>
        <TextInput
          style={styles.input}
          placeholder="email"
          onChangeText={setId}
          keyboardType="email-address"
          ref={emailBox}
          onSubmitEditing={() => pwBox.current.focus()}
          returnKeyType="next"
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="password"
          onChangeText={setPw}
          ref={pwBox}
        />
      </View>
      <View style={styles.check}>
        <MaterialButton
          marginB={true}
          children={'로그인'}
          onPress={onLogin}
          // () => navigation.navigate('Profile')
        />
        <MaterialButton
          children={'회원가입'}
          onPress={() => navigation.navigate('SignUpStack')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  logo: {
    width: 60,
    height: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 0.7,
  },
  headerText: {
    marginLeft: 20,
    fontSize: 30,
    fontWeight: '500',
  },
  logIn: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  check: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#00D1FF',
    fontSize: 14,
  },
  btn: {
    marginBottom: 15,
  },
});

export default SignInScreen;
