import React, { useEffect } from 'react';
import { Calendar } from 'react-native-calendars';
import { useDispatch, useSelector } from 'react-redux';
import { setDay } from '../redux_modules/day';

const CustomCalendar = () => {
  const dispatch = useDispatch();

  return (
    <Calendar
      onDayPress={day => {
        dispatch(setDay(day.dateString));
      }}
      onPressArrowLeft={subtractMonth => subtractMonth()}
      onPressArrowRight={addMonth => addMonth()}
    />
  );
};

export default CustomCalendar;
