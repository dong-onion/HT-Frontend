/* eslint-disable prettier/prettier */

//앱 실행시 실행되는 최초화면입니다 현재는 토큰이 유효하면 로그인화면 없이 프로필 화면으로 이동하게 만들었습니다

import { useIsFocused } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {  StyleSheet, Text, View, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import makeRequest from '../function/makeRequest';

const SplashScreen = ({ navigation }) => {
  const isFocused = useIsFocused;
  const onSplash = async () => {
    try {
      const res = await makeRequest({
				method : 'GET',
				url : 'auth/check',
			});
			if (res.result === 'SUCCESS'){
				const MyUserId = JSON.stringify(res.data);
				AsyncStorage.setItem('MyUserId', MyUserId);
				navigation.navigate('MainBottomTab', { screen : 'Calendar'});
			} else {
				navigation.navigate('SignInStack',{ screen : 'signIn'});
			}
    } catch (error) {
      console.log('onSplash Error :', error);
    }
  };
  useEffect(() => {
    if (isFocused) {
      setTimeout(onSplash, 3000);
    }
  }, [isFocused]);
  return (
    <View style={styles.container}>

			<View style={styles.textBox}>
				<Text style={styles.text}>Health-Trainer</Text>
			</View>
			<View style={styles.imgBox}>
				<Image style={styles.img} source={require('../assets/logo.jpeg')} />
			</View>
    </View>
  );
};

const styles = StyleSheet.create({
	container : {
		backgroundColor : '#FCFCFC',
		flex : 1,
	},
	imgBox : {
		justifyContent : 'center',
		alignItems : 'center',

	},
	textBox : {
		justifyContent : 'center',
		alignItems : 'center',
		marginTop : 100,
		marginBottom : 60,
	},
	text : {
		fontSize : 33,
		fontWeight : 'bold',
	},
});

export default SplashScreen;
