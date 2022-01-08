import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileImage = () => {
  return (
    <View style={styles.block}>
      <Icon style={styles.icon} name="camera-enhance" size={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    borderRadius: 10,
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: '#aaaaaa',
    backgroundColor: '#cccccc',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  icon: { padding: 3 },
});

export default ProfileImage;
