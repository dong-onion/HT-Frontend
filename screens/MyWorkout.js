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

const MyWorkout = ({ navigation }) => {
  useEffect(() => {
    const res = makeRequest({
      method: 'GET',
      url: '/users/{id}/workout-list/all',
    });
    console.log(res.data);
    console.log('isRender');
    // setRoutineList(res.data);
  }, [routineList, routineTitle]);

  const [routineList, setRoutineList] = useState([
    { id: 1, title: '목', time: 120 },
    { id: 2, title: '배', time: 140 },
  ]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [routineTitle, setRoutineTitle] = useState('');
  const [routineTime, setRoutineTime] = useState(0);
  const sendData = async () => {
    await makeRequest({
      method: 'POST',
      url: '/users/workout-list',
      data: { title: routineTitle, time: routineTime },
    });
  };
  const onPress = () => {
    setModalVisible(!isModalVisible);
  };
  const onDelete = async (id, title) => {
    setRoutineList([...routineList.filter(el => el.id !== id)]);
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
          <WorkoutModal
            routineTitle={title => {
              setRoutineTitle(title);
            }}
            routineTime={time => setRoutineTime(time)}
            isVisi={v => setModalVisible(v)}
            sendData={sendData}
          />
        </View>
      </Modal>
      <View style={styles.listBox}>
        {routineList.length === 0 ? (
          <Text style={styles.text}>나만의 운동루틴을 만들어보세요!</Text>
        ) : (
          <FlatList
            keyExtractor={item => item.id}
            data={routineList}
            renderItem={({ item }) => (
              <RoutineListItem
                id={item.id}
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
