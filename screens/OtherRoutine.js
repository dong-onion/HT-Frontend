import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MaterialButton from '../components/MaterialButton';
import WorkoutListItem from '../components/WorkoutListItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectActions } from '../redux_modules/workout/workout.reducer';
import { getMyWorkoutList } from '../redux_modules/workout/workout.action';

const OtherRoutine = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const workoutList = useSelector(selectActions);
  const { title, time } = route.params;
  const getUserId = async () => {
    //userId params로 받아야함 or AsyncStorage로 받음 or redux로 관리
    const UserId = await AsyncStorage.getItem('MyUserId');

    dispatch(getMyWorkoutList({ userId: UserId, title: title }));
  };
  useEffect(() => {
    getUserId();
  }, [navigation]);

  const onPress = () => {
    navigation.navigate('OtherWorkout');
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.timeText}>예상소요시간 : {time}분</Text>
      </View>
      <View style={styles.Add} />
      <View style={styles.listBox}>
        <FlatList
          keyExtractor={item => item.uniqueNum}
          data={workoutList}
          renderItem={({ item }) => (
            <WorkoutListItem
              name={item.name}
              uniqueNum={item.uniqueNum}
              count={item.count}
              weight={item.weight}
              set={item.set}
              onFix={true}
            />
          )}
        />
      </View>
      <View style={styles.Btn}>
        <MaterialButton
          children={'확인'}
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
export default OtherRoutine;
