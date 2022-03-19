import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import makeRequest from '../function/makeRequest';

//그룹 패스워드 처리

const GroupListItem = ({ title, id }) => {
  const postApi = async () => {
    await makeRequest({
      method: 'POST',
      url: `/users/team/${id}/join`,
    });
  };
  const onPress = () => {
    Alert.alert(
      `${title} 그룹에 가입신청 하시겠습니까?`,
      '확인을 누르시면 가입신청이 됩니다',
      [
        { text: '취소' },
        {
          text: '확인',
          onPress: () => {
            postApi();
          },
        },
      ],
    );
  };
  return (
    <View style={styles.textBox}>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity style={styles.icon}>
        <Icon name="addusergroup" size={28} onPress={onPress} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default GroupListItem;
