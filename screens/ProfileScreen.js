import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <View style={styles.imgBox}>
        <Image style={styles.profile} source={require('../assets/user.png')} />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.textInput}>닉네임 : </Text>
        <Text style={styles.textInput}>{'nickName'}</Text>
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.textInput}>나이 : </Text>
        <Text style={styles.textInput}>{'age'}</Text>
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.textInput}>체중 : </Text>
        <Text style={styles.textInput}>{'weight'}</Text>
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.textInput}>신장 : </Text>
        <Text style={styles.textInput}>{'height'}</Text>
      </View>
      <View style={styles.BtnBox}>
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => navigation.navigate('MyProfile')}>
          <Text style={styles.textBtn}>확인</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
  imgBox: {
    flex: 1.4,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    borderRadius: 50,
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: '#aaaaaa',
    backgroundColor: '#cccccc',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  inputBox: {
    paddingHorizontal: 30,
    borderBottomWidth: 2,
    borderBottomColor: '#00D1FF',
    marginHorizontal: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: 'white',
  },
  textInput: {
    color: 'black',
  },
  BtnBox: {
    flex: 1.9,

    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  Btn: {
    opacity: 0.8,
    borderRadius: 16,
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 30,
    paddingVertical: 14,
    width: 140,
  },
  textBtn: {
    color: 'black',
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default ProfileScreen;
