import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RoutineListItem from '../components/RoutineListItem';
import makeRequest from '../function/makeRequest';

const OtherWorkout = ({ navigation }) => {
  const getWorkout = async () => {
    //params로 타인 유저 id 받아야함
    const MyUserId = await AsyncStorage.getItem('MyUserId');
    const res = await makeRequest({
      method: 'GET',
      url: `/users/${MyUserId}/workout-list/all`,
    });
    setRoutineList(res.data);
  };
  useEffect(() => {
    getWorkout();
  }, []);

  const [routineList, setRoutineList] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.Add} />

      <View style={styles.listBox}>
        {routineList.length === 0 ? (
          <Text style={styles.text}>루틴이 없습니다!</Text>
        ) : (
          <FlatList
            keyExtractor={item => item.id}
            data={routineList}
            renderItem={({ item }) => (
              <RoutineListItem
                id={item.id}
                title={item.title}
                onPress={() =>
                  navigation.navigate('OtherRoutine', {
                    title: item.title,
                    time: item.time,
                  })
                }
                onFix={true}
              />
            )}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Add: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  modal: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listBox: {
    flex: 9,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default OtherWorkout;
