import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MyGroupList = ({ id, title }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touch}>
        <Text style={styles.text1}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'skyblue',
    marginBottom: 15,
  },
  touch: {
    width: 270,
  },
  text1: {
    fontSize: 24,
  },
});

export default MyGroupList;
