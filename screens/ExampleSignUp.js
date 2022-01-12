import React from 'react';
import { Button, Text, View } from 'react-native';

const ExampleSignUp = ({ navigation }) => {
  return (
    <View>
      <Text>Sign up Screen</Text>
      <Button
        title="Go Sign in"
        onPress={() => navigation.navigate('signIn')}
      />
    </View>
  );
};

export default ExampleSignUp;
