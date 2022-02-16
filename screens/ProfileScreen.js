import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ProfilePrivate from '../components/ProfilePrivate';
import {
  getOtherProfile,
  setFollowAction,
} from '../redux_modules/profile/otherProfile.action';
import { selectOtherProfile } from '../redux_modules/profile/otherProfile.reducer';
setFollowAction;
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
const ProfileScreen = ({ navigation }) => {
  const [profileStatus, setProfileStatus] = useState(false);
  const { follow, name, age, weight, height } = useSelector(selectOtherProfile);
  const dispatch = useDispatch();

  const getUserId = async () => {
    //타인 userId parmas 로 받아야함 or Asyncstorage or redux
    const userId = await AsyncStorage.getItem('MyUserId');
    dispatch(getOtherProfile(userId));
  };

  useFocusEffect(
    useCallback(() => {
      getUserId();
    }, []),
  );
  const followOnpress = () => {
    follow
      ? Alert.alert(
          '팔로우를 취소 하시겠습니까?',
          '확인을 누르시면 팔로우 취소를 합니다',
          [
            { text: '취소' },
            {
              text: '확인',
              onPress: () => {
                dispatch(setFollowAction(!follow));
                setProfileStatus(!profileStatus);
                /*팔로잉 여부 전송*/
              },
            },
          ],
        )
      : Alert.alert('팔로우 하시겠습니까?', '확인을 누르시면 팔로우 합니다', [
          { text: '취소' },
          {
            text: '확인',
            onPress: () => {
              dispatch(setFollowAction(!follow));
              setProfileStatus(!profileStatus);
              /*팔로잉 여부 전송*/
            },
          },
        ]);
  };
  return (
    <View style={styles.body}>
      <View style={styles.imgBox}>
        <Image style={styles.profile} source={require('../assets/user.png')} />
      </View>
      <View style={styles.FollowBox}>
        <TouchableOpacity
          style={[styles.Btn, follow && styles.following]}
          onPress={followOnpress}>
          <Text style={styles.textBtn}>
            {follow ? '팔로잉' : '팔로우 신청'}
          </Text>
        </TouchableOpacity>
      </View>
      {profileStatus ? (
        <>
          <View style={styles.inputBox}>
            <Text style={styles.textInput}>닉네임 : </Text>
            <Text style={styles.textInput}>{name}</Text>
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.textInput}>나이 : </Text>
            <Text style={styles.textInput}>{age}</Text>
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.textInput}>체중 : </Text>
            <Text style={styles.textInput}>{weight}</Text>
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.textInput}>신장 : </Text>
            <Text style={styles.textInput}>{height}</Text>
          </View>
        </>
      ) : (
        <ProfilePrivate />
      )}

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
  FollowBox: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  following: {
    backgroundColor: '#64b5f6',
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
