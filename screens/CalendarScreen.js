import React from 'react';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { View } from 'react-native';

const CalendarScreen = () => {
  return (
    <Calendar
      onDayPress={day => {
        console.log('selected day', day);
      }}
      onDayLongPress={day => {
        console.log('selected day', day);
      }}
      onMonthChange={month => {
        console.log('month changed', month);
      }}
      onPressArrowLeft={subtractMonth => subtractMonth()}
      onPressArrowRight={addMonth => addMonth()}
    />
  );
};

export default CalendarScreen;
