import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ProfilePrivate = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>비공개</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#757575',
    height: 280,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { fontSize: 60 },
});
export default ProfilePrivate;
