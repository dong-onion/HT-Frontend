import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProfileImage = () => {
  return <View style={styles.block} />;
};

const styles = StyleSheet.create({
  block: {
    borderRadius: 10,
    height: 100,
    width: 100,
    borderWidth: 1,
  },
});

export default ProfileImage;
