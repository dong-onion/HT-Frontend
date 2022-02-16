import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import MaterialInput from './MaterialInput';
import { TimePicker } from 'react-native-simple-time-picker';

const WorkoutModal = ({ isVisi, sendData }) => {
  const [title, setTitle] = useState('');
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const handleChange = value => {
    setHours(value.hours);
    setMinutes(value.minutes);
  };
  const onPress = () => {
    if (title === '' || hours * 60 + minutes === 0) {
      Alert.alert('루틴제목과 소요시간을 입력해주세요');
    } else {
      isVisi(false);
      sendData(title, hours * 60 + minutes);
    }
  };
  return (
    <View>
      <View style={styles.title}>
        <MaterialInput
          placeholder="루틴 제목"
          value={title}
          onChangeText={setTitle}
        />
      </View>
      <View>
        <TimePicker
          style={styles.pickerItem}
          value={{ hours, minutes }}
          onChange={handleChange}
          pickerShows={['hours', 'minutes']}
          hoursUnit="시간"
          minutesUnit="분"
        />
        <View style={styles.btnBox}>
          <TouchableOpacity style={styles.btn} onPress={() => isVisi(false)}>
            <Text>취소</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text>저장</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  btnBox: {
    marginTop: 50,
    flexDirection: 'row',
    // backgroundColor: 'tomato',
    justifyContent: 'space-around',
  },
  btn: {
    borderRadius: 10,
    backgroundColor: '#d5e1df',
    width: 60,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default WorkoutModal;
