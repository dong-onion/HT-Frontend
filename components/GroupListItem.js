import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const GroupListItem = ({ title }) => {
  return (
    <View style={styles.textBox}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  textBox: {
    flexDirection: 'row',
    backgroundColor: 'skyblue',
    padding: 10,
    marginBottom: 10,
  },
});

export default GroupListItem;
