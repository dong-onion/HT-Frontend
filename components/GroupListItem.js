import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import makeRequest from '../function/makeRequest';
import NormalInput from './NormalInput';
import Modal from 'react-native-modal';

//그룹 패스워드 처리

const GroupListItem = ({ title, id, state }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [password, setPassword] = useState('');
  const postApi = async pw => {
    await makeRequest({
      method: 'POST',
      url: `/users/team/${id}/join`,
      data: {
        password: pw,
      },
    });
  };
  const onPress = async () => {
    if (state === 'Y') {
      setModalVisible(true);
    } else {
      Alert.alert(
        `${title} 그룹에 가입신청 하시겠습니까?`,
        '확인을 누르시면 가입신청이 됩니다',
        [
          { text: '취소' },
          {
            text: '확인',
            onPress: () => {
              postApi(null);
            },
          },
        ],
      );
    }
  };
  const modalOnPress = pw => {
    postApi(pw);
    setModalVisible(false);
  };
  return (
    <View style={styles.textBox}>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity style={styles.icon}>
        <Icon name="addusergroup" size={28} onPress={onPress} />
      </TouchableOpacity>
      <Modal isVisible={modalVisible}>
        <View style={styles.modalView}>
          <NormalInput
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChangeText={setPassword}
          />
          <View style={styles.btnBox}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => setModalVisible(false)}>
              <Text>취소</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => modalOnPress(password)}>
              <Text>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  textBox: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  icon: {
    width: 50,
    alignItems: 'center',
  },
  btnBox: {
    marginTop: 50,
    flexDirection: 'row',
    // backgroundColor: 'tomato',
    justifyContent: 'space-around',
  },
  btn: {
    borderRadius: 10,
    backgroundColor: '#d5e1df',
    width: 60,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
  },
});

export default GroupListItem;
