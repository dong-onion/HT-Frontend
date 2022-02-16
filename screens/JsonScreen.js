import React from 'react';
import { View, Button } from 'react-native';

const JsonScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="타인 운동리스트"
        onPress={() =>
          navigation.navigate('WorkoutStack', { screen: 'OtherWorkout' })
        }
      />
      <Button
        title="내 운동리스트"
        onPress={() =>
          navigation.navigate('WorkoutStack', { screen: 'MyWorkout' })
        }
      />
      <Button
        title="메인화면"
        onPress={() => navigation.navigate('MainBottomTab')}
      />
    </View>
  );
};

export default JsonScreen;
