import React from 'react';
import { Calendar } from 'react-native-calendars';
import { useDispatch } from 'react-redux';
import { setDate } from '../redux_modules/date';

const CustomCalendar = () => {
  const dispatch = useDispatch();

  const onDayPress = day => {
    dispatch(setDate(day.dateString));
  };

  return (
    <Calendar
      onDayPress={onDayPress}
      onPressArrowLeft={subtractMonth => subtractMonth()}
      onPressArrowRight={addMonth => addMonth()}
    />
  );
};

export default CustomCalendar;
