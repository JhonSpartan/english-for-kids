import React, { useState } from 'react';
import "react-big-calendar/lib/css/react-big-calendar.css"
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import DatePicker from 'react-datepicker';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import getDay from 'date-fns/getDay';
import startOfWeek from 'date-fns/startOfWeek';

const locals = {
  'en-GB': require('date-fns/locale/en-GB')
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locals
});

const events = [
  {
    title: 'Meeting',
    allDay: true,
    start: new Date(2021, 11, 30),
    end: new Date(2021, 11, 30)
  },
  {
    title: 'Vacation',
    start: new Date(2021, 11, 30),
    end: new Date(2021, 11, 30)
  },
  {
    title: 'Conference',
    start: new Date(2021, 11, 30),
    end: new Date(2021, 11, 30)
  }
];


const TimeTableReact = () => {
  return (
    <Calendar 
      localizer={localizer}
      startAccessor='start'
      endAccessor='end'
      events={events}
    />
  )
}

export default TimeTableReact;