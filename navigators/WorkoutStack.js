import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MyWorkout from '../screens/MyWorkout';
import Routine from '../screens/Routine';
import SelectExercise from '../screens/SelectExercise';
import OtherWorkout from '../screens/OtherWorkout';
import OtherRoutine from '../screens/OtherRoutine';
import GroupMemebersScreen from '../screens/GroupMemebersScreen';

const Stack = createNativeStackNavigator();
const WorkoutStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyWorkout" component={MyWorkout} />
      <Stack.Screen name="Routine" component={Routine} />
      <Stack.Screen name="SelectExercise" component={SelectExercise} />
      <Stack.Screen name="OtherWorkout" component={OtherWorkout} />
      <Stack.Screen name="OtherRoutine" component={OtherRoutine} />
      <Stack.Screen name="GroupMembers" component={GroupMemebersScreen} />
    </Stack.Navigator>
  );
};

export default WorkoutStack;
