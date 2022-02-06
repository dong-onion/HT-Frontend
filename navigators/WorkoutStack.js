import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MyWorkout from '../screens/MyWorkout';
import Routine from '../screens/Routine';
import SelectExercise from '../screens/SelectExercise';

const Stack = createNativeStackNavigator();
const WorkoutStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyWorkout" component={MyWorkout} />
      <Stack.Screen name="Routine" component={Routine} />
      <Stack.Screen name="SelectExercise" component={SelectExercise} />
    </Stack.Navigator>
  );
};

export default WorkoutStack;
