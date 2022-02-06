import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialInput from '../components/MaterialInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MaterialButton from '../components/MaterialButton';
import WorkoutListItem from '../components/WorkoutListItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectActions } from '../redux_modules/workout/workout.reducer';
import { deleteAction } from '../redux_modules/workout/workout.action';
const Routine = ({ navigation }) => {
  const dispatch = useDispatch();
  const workoutList = useSelector(selectActions);
  const [title, setTitle] = useState('');
  const onDelete = listId => {
    console.log(listId);
    dispatch(deleteAction(listId));
  };

  useEffect(() => {
    console.log('Workout List : ', workoutList);
  }, [workoutList]);
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View style={styles.title}>
          <MaterialInput
            placeholder="루틴 제목"
            value={title}
            onChangeText={setTitle}
          />
        </View>
        <TouchableOpacity
          style={styles.Add}
          onPress={() => navigation.navigate('SelectExercise')}>
          <Icon name="pluscircle" size={28} style={{ marginRight: 7 }} />
          <Text>운동 추가하기</Text>
        </TouchableOpacity>
        <View style={styles.listBox}>
          <FlatList
            keyExtractor={item => item.id}
            data={workoutList}
            renderItem={({ item }) => (
              <WorkoutListItem
                name={item.name}
                id={item.id}
                count={item.count}
                weight={item.weight}
                set={item.set}
                onDelete={() => onDelete(item.id)}
              />
            )}
          />
        </View>
        <View style={styles.Btn}>
          <MaterialButton children={'저장'} />
        </View>
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
  Btn: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Routine;
