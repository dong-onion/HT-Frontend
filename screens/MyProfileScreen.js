import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import ProfileList from '../components/ProfileList';
import { SignUpContext } from '../components/SignUpContext';

const MyProfileScreen = () => {
  const [activate, setActivate] = useState(true);
  const [text, setText] = useState('공개');
  useEffect(() => {}, [text]);
  // const [newData, setNewData] = useState({
  //   age: age,
  //   height: height,
  //   nickName: nickName,
  //   weight: weight,
  // });
  // const onPress = () => {
  //   updateSignUpInfo(newData);
  // };

  const onActivate = () => {
    activate
      ? Alert.alert(
          '프로필을 비공개로 바꾸시겠습니까?',
          '확인을 누르시면 비공개로 바뀌어집니다.',
          [
            { text: '취소' },
            {
              text: '확인',
              onPress: () => {
                setActivate(!activate);
                /*프로필 공개여부 DB 전송*/
              },
            },
          ]
        )
      : Alert.alert(
          '프로필을 공개로 바꾸시겠습니까?',
          '확인을 누르시면 공개로 바뀌어집니다.',
          [
            { text: '취소' },
            {
              text: '확인',
              onPress: () => {
                setActivate(!activate);
                /*프로필 공개여부 DB 전송*/
              },
            },
          ]
        );
    setText(activate ? '공개' : '비공개');
  };

  return (
    <View style={styles.body}>
      <View style={styles.imgBox}>
        <Text>이미지</Text>
      </View>
      <ProfileList
        label="닉네임 : "
        // data={(val) =>
        //   setNewData({
        //     ...newData,
        //     nickName: val,
        //   })
        // }
        // text={nickName}
      />
      <ProfileList
        label="나이 : "
        // data={(val) =>
        //   setNewData({
        //     ...newData,
        //     age: val,
        //   })
        // }
        // text={age}
      />
      <ProfileList
        label="체중 : "
        // data={(val) =>
        //   setNewData({
        //     ...newData,
        //     weight: val,
        //   })
        // }
        // text={weight}
      />
      <ProfileList
        label="신장 : "
        // data={(val) =>
        //   setNewData({
        //     ...newData,
        //     height: val,
        //   })
        // }
        // text={height}
      />
      <View style={styles.BtnBox}>
        <TouchableOpacity style={styles.Btn}>
          <Text style={styles.textBtn}>확인</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn} onPress={onActivate}>
          <Text style={styles.textBtn}>{text}</Text>
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
  },
  inputBox: {
    paddingHorizontal: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#00D1FF',
    marginHorizontal: 50,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
    flexGrow: 5,
  },
  text2: {
    color: 'black',
    flexGrow: 1,
  },
  fixOpa: {
    flexGrow: 1,
    backgroundColor: '#ede7f6',
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'yellow',
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

export default MyProfileScreen;
