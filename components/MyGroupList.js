import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import makeRequest from '../function/makeRequest';

const MyGroupList = ({ id, title, userList }) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('WorkoutStack', {
      screen: 'GroupMembers',
      params: { userList },
    });
  };
  const onTrash = async () => {
    const res = await makeRequest({
      method: 'DELETE',
      url: `/users/team/${id}`,
    });
    console.log(res);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touch} onPress={onPress}>
        <Text style={styles.text1}>{title}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="trash" size={28} onPress={onTrash} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'skyblue',
    marginBottom: 15,
    flexDirection: 'row',
  },
  touch: {
    width: 270,
  },
  text1: {
    fontSize: 24,
  },
});

export default MyGroupList;
