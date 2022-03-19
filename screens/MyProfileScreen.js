/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ProfileList from '../components/ProfileList';
import {
  setProfileStateAciton,
  setAgeAction,
  setHeightAciton,
  SetNameAction,
  setWeightAciton,
  getMyProfile,
} from '../redux_modules/profile/profile.action';
import { selectProfile } from '../redux_modules/profile/profile.reducer';
import makeRequest from '../function/makeRequest';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const MyProfileScreen = ({ navigation }) => {
  const { name, age, height, weight, profileState } =
    useSelector(selectProfile);
  console.log('name :', name);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyProfile());
  }, []);

  const postMyProfile = async () => {
    navigation.navigate('Calendar');
    await makeRequest({
      method: 'POST',
      url: '/users/profile/me',
      data: {
        name: name,
        age,
        height,
        weight,
        profileState,
        sex: 'F',
        email: 'dongEon',
      },
    });
  };

  const onProfileState = () => {
    profileState
      ? Alert.alert(
          '프로필을 비공개로 바꾸시겠습니까?',
          '확인을 누르시면 비공개로 바뀌어집니다.',
          [
            { text: '취소' },
            {
              text: '확인',
              onPress: () => {
                dispatch(setProfileStateAciton(!profileState));
              },
            },
          ],
        )
      : Alert.alert(
          '프로필을 공개로 바꾸시겠습니까?',
          '확인을 누르시면 공개로 바뀌어집니다.',
          [
            { text: '취소' },
            {
              text: '확인',
              onPress: () => {
                dispatch(setProfileStateAciton(!profileState));
              },
            },
          ],
        );
  };

  return (
    <KeyboardAwareScrollView style={styles.body}>
      <View style={styles.imgBox}>
        <Image style={styles.profile} source={require('../assets/user.png')} />
      </View>
      <ProfileList
        label="닉네임 : "
        text={name}
        onModify={text => {
          dispatch(SetNameAction(text));
        }}
      />
      <ProfileList
        label="나이 : "
        text={age}
        onModify={text => {
          dispatch(setAgeAction(text));
        }}
      />
      <ProfileList
        label="체중 : "
        text={weight}
        onModify={text => {
          dispatch(setWeightAciton(text));
        }}
      />
      <ProfileList
        label="신장 : "
        text={height}
        onModify={text => {
          dispatch(setHeightAciton(text));
        }}
      />
      <View style={styles.BtnBox}>
        <TouchableOpacity style={styles.Btn} onPress={postMyProfile}>
          <Text style={styles.textBtn}>확인</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn} onPress={onProfileState}>
          <Text style={styles.textBtn}>{profileState ? '공개' : '비공개'}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
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
    marginTop: 60,
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
