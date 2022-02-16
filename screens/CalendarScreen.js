import React, { useEffect, useRef, useState } from 'react';
import { ScrollView } from 'react-native';
import CustomCalendar from '../components/Calendar';
import TodoList from '../components/TodoList';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const workoutList = [
  {
    date: '2022-02-02',
    workout: [
      { name: '팔굽혀펴기', part: '상체', count: '10', set: '2', timer: 0 },
    ],
    color: null,
  },
  {
    date: '2022-02-03',
    workout: [
      { name: '팔굽혀펴기', part: '상체', count: '10', set: '2', timer: 0 },
      { name: '덤벨프레스', part: '상체', count: '15', set: '4', timer: 0 },
    ],
    color: null,
  },
  {
    date: '2022-02-04',
    workout: [
      { name: '팔굽혀펴기', part: '상체', count: '10', set: '2', timer: 0 },
      { name: '덤벨프레스', part: '상체', count: '15', set: '4', timer: 0 },
      { name: '스쿼트', part: '하체', count: '20', set: '3', timer: 0 },
    ],
    color: null,
  },
];

const getWorkout = date => {
  for (let i = 0; i < workoutList.length; i++) {
    if (workoutList[i].date === date.day) {
      return workoutList[i];
    }
  }
  return null;
};

const CalendarScreen = () => {
  const selectedDay = useSelector(state => state.day);
  const [workout, setWorkout] = useState(null);

  useEffect(() => {
    setWorkout(getWorkout(selectedDay)?.workout);
  }, [selectedDay]);

  return (
    <>
      <CustomCalendar />
      <ScrollView style={styles.container}>
        <TodoList workout={workout} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: { paddingTop: 10 },
});

export default CalendarScreen;
