import React from 'react';
import { Calendar } from 'react-native-calendars';
import { useDispatch, useSelector } from 'react-redux';
import { setDay } from '../redux_modules/day';

const onDayPress = day => {
  console.log('selected day', day);
};

const CustomCalendar = () => {
  const dispatch = useDispatch();

  return (
    <Calendar
      onDayPress={day => {
        onDayPress(day);
      }}
      onPressArrowLeft={subtractMonth => subtractMonth()}
      onPressArrowRight={addMonth => addMonth()}
    />
  );
};

export default CustomCalendar;
