import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import RoutineListItem from '../components/RoutineListItem';
import makeRequest from '../function/makeRequest';
import Modal from 'react-native-modal';
import WorkoutModal from '../components/WorkoutModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyWorkout = ({ navigation }) => {
  const getMyWorkout = async () => {
    const MyUserId = await AsyncStorage.getItem('MyUserId');

    const res = await makeRequest({
      method: 'GET',
      url: `/users/${MyUserId}/workout-list/all`,
    });
    setRoutineList(res.data);
  };
  useEffect(() => {
    getMyWorkout();
  }, []);

  const [routineList, setRoutineList] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const sendData = async (title, time) => {
    console.log('sendData routineTitle : ', title);
    console.log('sendData routineTime : ', time);
    const res = await makeRequest({
      method: 'POST',
      url: '/users/workout-list',
      data: { title: title, time: time },
    });
    console.log('MyWorkout/sendData : ', res.data);
    getMyWorkout();
  };
  const onPress = () => {
    setModalVisible(!isModalVisible);
  };
  const onDelete = async (id, title) => {
    console.log('id : ', id, 'title : ', title);
    setRoutineList([...routineList.filter(el => el.exerciseListId !== id)]);
    await makeRequest({
      method: 'DELETE',
      url: `/users/workout-list/${title}`,
    });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Add} onPress={onPress}>
        <Icon name="pluscircle" size={28} style={{ marginRight: 7 }} />
        <Text>운동루틴 추가하기</Text>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modal}>
          <WorkoutModal isVisi={v => setModalVisible(v)} sendData={sendData} />
        </View>
      </Modal>
      <View style={styles.listBox}>
        {routineList.length === 0 ? (
          <Text style={styles.text}>나만의 운동루틴을 만들어보세요!</Text>
        ) : (
          <FlatList
            keyExtractor={item => item.exerciseListId}
            data={routineList}
            renderItem={({ item }) => (
              <RoutineListItem
                id={item.exerciseListId}
                title={item.title}
                onPress={() =>
                  navigation.navigate('Routine', {
                    title: item.title,
                    time: item.time,
                  })
                }
                onDelete={onDelete}
              />
            )}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Add: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  modal: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listBox: {
    flex: 9,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MyWorkout;
