import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const data = [
  {
    title: '월요일',
    Action: [
      { id: 123, name: '벤치', weight: 100, count: 10, set: 5 },
      { id: 356, name: '숄더', weight: 40, count: 10, set: 5 },
    ],
  },
  {
    title: '화요일',
    Action: [{ id: 543, name: '바벨', weight: 10, count: 10, set: 5 }],
  },
];

const WorkoutListItem = ({ name, id, weight, set, count, onDelete }) => {
  return (
    <>
      <View style={styles.body}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.name}>{weight}kg</Text>
        <Text style={styles.name}>{count}회</Text>
        <Text style={styles.name}>{set}세트</Text>
        <TouchableOpacity style={styles.icon} onPress={onDelete}>
          <Icon name="delete" size={28} />
        </TouchableOpacity>
      </View>
    </>
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

export default WorkoutListItem;
