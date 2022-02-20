import React, { useEffect, useState } from 'react';
import { Button, ScrollView } from 'react-native';
import CustomCalendar from '../components/Calendar';
import TodoList from '../components/TodoList';
import { StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setCalendar } from '../redux_modules/calendar';
import AddButton from '../components/AddButton';
import _ from 'lodash';

const workoutList = [
  {
    date: '2022-02-02',
    workout: [
      { name: '팔굽혀펴기', part: '상체', count: '10', set: '2', time: 0 },
    ],
    color: null,
  },
  {
    date: '2022-02-03',
    workout: [
      { name: '팔굽혀펴기', part: '상체', count: '10', set: '2', time: 0 },
      { name: '덤벨프레스', part: '상체', count: '15', set: '4', time: 0 },
    ],
    color: null,
  },
  {
    date: '2022-02-04',
    workout: [
      { name: '팔굽혀펴기', part: '상체', count: '10', set: '2', time: 0 },
      { name: '덤벨프레스', part: '상체', count: '15', set: '4', time: 0 },
      { name: '스쿼트', part: '하체', count: '20', set: '3', time: 0 },
    ],
    color: null,
  },
];

const CalendarScreen = () => {
  const [workout, setWorkout] = useState(null);

  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.date.date);
  const calendar = useSelector(state => state.calendar.calendar);

  useEffect(() => {
    dispatch(setCalendar(workoutList));
  }, [dispatch]);

  useEffect(() => {
    const searchWorkout = date => {
      for (let i = 0; i < calendar?.length; i++) {
        if (calendar[i].date === date) {
          return _.cloneDeep(calendar[i]).workout;
        }
      }
      return null;
    };

    setWorkout(searchWorkout(selectedDate));
  }, [selectedDate, calendar]);

  const onPress = () => {
    console.log(workout);
  };

  return (
    <>
      <CustomCalendar />
      <ScrollView contentContainerStyle={styles.container}>
        <TodoList workout={workout} setWorkout={setWorkout} />
        <AddButton onPress={onPress} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: { paddingTop: 10, alignItems: 'center' },
});

export default CalendarScreen;
