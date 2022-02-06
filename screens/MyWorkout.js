import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import RoutineListItem from '../components/RoutineListItem';

const MyWorkout = ({ navigation }) => {
  const [routineList, setRoutineList] = useState([]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.Add}
        onPress={() => navigation.navigate('Routine')}>
        <Icon name="pluscircle" size={28} style={{ marginRight: 7 }} />
        <Text>운동루틴 추가하기</Text>
      </TouchableOpacity>
      <View style={styles.listBox}>
        {routineList.length === 0 ? (
          <Text style={styles.text}>나만의 운동루틴을 만들어보세요!</Text>
        ) : (
          <FlatList
            keyExtractor={item => item.id}
            data={routineList}
            renderItem={data => <RoutineListItem id={data.id} />}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Add: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
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
