import React, { useCallback, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/AntDesign';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MyGroupList from '../components/MyGroupList';
import NormalInput from '../components/NormalInput';
import makeRequest from '../function/makeRequest';
import { useFocusEffect } from '@react-navigation/native';

const SetGroup = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [number, setNumber] = useState(0);
  const [password, setPassword] = useState(null);
  const [state, setState] = useState('N');
  const [myGroup, setMyGroup] = useState([]);
  const modalOnPress = async () => {
    if (
      state === 'Y' &&
      password !== null &&
      password !== '' &&
      number !== 0 &&
      name !== ''
    ) {
      await makeRequest({
        method: 'POST',
        url: '/users/team',
        data: {
          name,
          number,
          state,
          password,
        },
      });
      setModalVisible(false);
    } else if (state === 'N' && number !== 0 && name !== '') {
      await makeRequest({
        method: 'POST',
        url: '/users/team',
        data: {
          name,
          number,
          state,
          password,
        },
      });
      setModalVisible(false);
    } else {
      Alert.alert('공백은 쓸수 없습니다');
    }
  };
  const getMyGroup = async () => {
    const userId = await AsyncStorage.getItem('MyUserId');
    // console.log('userId : ', userId);
    const res = await makeRequest({
      method: 'GET',
      url: `/users/team/${userId}/get`,
    });
    console.log('res : ', res.data);
    setMyGroup(res.data);
    console.log('myGroup : ', myGroup);
  };

  useFocusEffect(
    useCallback(() => {
      getMyGroup();
    }, []),
  );
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.searchBox}>
        <TouchableOpacity
          style={styles.searchTextBox}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.searchText}>새 그룹 생성</Text>
          <Icon name="pluscircleo" size={28} />
        </TouchableOpacity>
        <Modal isVisible={modalVisible}>
          <View style={styles.modalView}>
            <View style={styles.inputBox}>
              <Text>그룹 이름 : </Text>
              <NormalInput width={200} value={name} onChangeText={setName} />
            </View>
            <View style={styles.inputBox}>
              <Text>그룹 인원수 : </Text>
              <NormalInput
                value={number}
                onChangeText={setNumber}
                width={200}
                keyboardType="number-pad"
              />
            </View>
            <View style={styles.pickerSt}>
              <Text>그룹 공개여부 : </Text>
              <Picker
                selectedValue={state}
                style={styles.pickerr}
                onValueChange={v => {
                  setState(v);
                }}>
                <Picker.Item label="공개" value="N" />
                <Picker.Item label="비공개" value="Y" />
              </Picker>
            </View>
            {state === 'Y' ? (
              <View style={styles.inputBox}>
                <Text>그룹 패스워드 : </Text>
                <NormalInput
                  value={password}
                  onChangeText={setPassword}
                  width={200}
                  placeholder="패스워드"
                />
              </View>
            ) : (
              <View style={styles.inputBox} />
            )}
            <View style={styles.btnBox}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => setModalVisible(false)}>
                <Text>취소</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={modalOnPress}>
                <Text>저장</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <View style={styles.groupList}>
        {myGroup.length ? (
          <FlatList
            keyExtractor={item => item.teamId}
            data={myGroup}
            renderItem={({ item }) => (
              <MyGroupList id={item.teamId} title={item.teamName} />
            )}
          />
        ) : (
          <Text style={styles.text1}>속한 그룹이 없습니다!</Text>
        )}
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  searchBox: {
    marginTop: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchTextBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 160,
    justifyContent: 'space-between',
  },
  searchText: {
    fontSize: 20,
  },
  modalView: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  pickerSt: {
    marginTop: 40,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pickerr: {
    width: 200,
  },
  inputBox: {
    marginTop: 40,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  groupList: {
    marginTop: 80,
    marginBottom: 10,
    flex: 1,
    height: 380,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 25,
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
  },
});

export default SetGroup;
