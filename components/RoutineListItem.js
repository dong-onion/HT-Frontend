import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const RoutineListItem = ({ id, title, onPress, onDelete, onFix }) => {
  return (
    <TouchableOpacity style={styles.body} onPress={onPress}>
      <Text style={styles.name}>{title}</Text>
      <TouchableOpacity onPress={() => onDelete(id, title)}>
        {onFix ? null : <Icon name="delete" size={28} />}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    width: 320,
    backgroundColor: 'white',
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#00D1FF',
    fontSize: 14,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    marginTop: 10,
  },
  icon: {
    marginLeft: 9,
  },
});
export default RoutineListItem;
