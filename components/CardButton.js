import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
import { API } from '../lib/API';
import axios from 'axios';

const onPress = async () => {
  //console.log('누름');
  //const res = await API.get('/users/1/profile');
  //console.log(res);
  const res2 = await API.post('/auth/login', {
    email: 'www',
    password: 'www',
  });
  console.log(res2.data);
};

const CardButton = ({ style }) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>시작</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 30,
    backgroundColor: '#6495ED',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});

export default CardButton;
