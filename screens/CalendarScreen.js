import React from 'react';
import { ScrollView } from 'react-native';
import CustomCalendar from '../components/Calendar';
import TodoList from '../components/TodoList';
import { StyleSheet } from 'react-native';

const workoutList = [
  {
    date: '2022-02-02',
    exercises: [
      { name: '팔굽혀펴기', part: '상체', count: '10', set: '2', timer: 0 },
      { name: '덤벨프레스', part: '상체', count: '15', set: '4', timer: 0 },
      { name: '스쿼트', part: '하체', count: '20', set: '3', timer: 0 },
    ],
    color: null,
  },
  {
    date: '2022-02-03',
    exercises: [
      { name: '팔굽혀펴기', part: '상체', count: '10', set: '2', timer: 0 },
      { name: '덤벨프레스', part: '상체', count: '15', set: '4', timer: 0 },
      { name: '스쿼트', part: '하체', count: '20', set: '3', timer: 0 },
    ],
    color: null,
  },
  {
    date: '2022-02-04',
    exercises: [
      { name: '팔굽혀펴기', part: '상체', count: '10', set: '2', timer: 0 },
      { name: '덤벨프레스', part: '상체', count: '15', set: '4', timer: 0 },
      { name: '스쿼트', part: '하체', count: '20', set: '3', timer: 0 },
    ],
    color: null,
  },
];

const CalendarScreen = () => {
  return (
    <>
      <CustomCalendar />
      <ScrollView style={styles.container}>
        <TodoList />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: { paddingTop: 10 },
});

export default CalendarScreen;
