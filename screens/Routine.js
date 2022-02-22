import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MaterialButton from '../components/MaterialButton';
import WorkoutListItem from '../components/WorkoutListItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectActions } from '../redux_modules/workout/workout.reducer';
import {
  deleteAction,
  getMyWorkoutList,
} from '../redux_modules/workout/workout.action';
import makeRequest from '../function/makeRequest';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Routine = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const workoutList = useSelector(selectActions);
  const { title, time } = route.params;
  const getMyUserId = async () => {
    const MyUserId = await AsyncStorage.getItem('MyUserId');

    dispatch(getMyWorkoutList({ userId: MyUserId, title: title }));
  };
  useEffect(() => {
    getMyUserId();
  }, [navigation]);

  const onDelete = async exerciseHistoryId => {
    dispatch(deleteAction(exerciseHistoryId));
    await makeRequest({
      method: 'DELETE',
      url: `/users/${exerciseHistoryId}/workout-list/workout`,
    });
  };
  const onPress = async () => {
    navigation.navigate('MyWorkout');
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.timeText}>예상소요시간 : {time}분</Text>
      </View>
      <TouchableOpacity
        style={styles.Add}
        // onPress={() => navigation.navigate('OtherWorkout')}>
        onPress={() => navigation.navigate('SelectExercise', { title, time })}>
        <Icon name="pluscircle" size={28} style={{ marginRight: 7 }} />
        <Text>운동 추가하기</Text>
      </TouchableOpacity>
      <View style={styles.listBox}>
        <FlatList
          keyExtractor={item => item.exerciseHistoryId}
          data={workoutList}
          renderItem={({ item }) => (
            <WorkoutListItem
              name={item.name}
              exerciseHistoryId={item.exerciseHistoryId}
              count={item.count}
              weight={item.weight}
              set={item.set}
              onDelete={() => onDelete(item.exerciseHistoryId)}
            />
          )}
        />
      </View>
      <View style={styles.Btn}>
        <MaterialButton
          children={'저장'}
          onPress={onPress}
          style={{ backgroundColor: '#d5e1df' }}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  title: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  timeText: {
    fontSize: 30,
  },
  Add: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  listBox: {
    flex: 6,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Btn: {
    flex: 2,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
  },
});
export default Routine;
