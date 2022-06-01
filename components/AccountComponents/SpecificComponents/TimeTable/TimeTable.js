import React, { useState } from 'react';
import moment from 'moment';
import CalendarControlls from './CalendarControlls/CalendarControlls';
import CalendarGrid from './CalendarGrid';
import CalendarHeader from './CalendarHeader/CalendarHeader';

const TimeTable = () => {

  moment.updateLocale({language: 'en'}, {localSpec: {week: {dow: 1}}});
  // const today = moment();
  const [today, setToday] = useState(moment());
  const startDay = today.clone().startOf('month').startOf('week');
  
  // window.moment = moment;

  const prevHandler = () => setToday(prev => prev.clone().subtract(1, 'month'));
  const todayHandler = () => setToday(moment());
  const nextHandler = () => setToday(next => next.clone().add(1, 'month'));



  return (
    <section className="timeTable">
      <CalendarHeader />
      <CalendarControlls 
        today={today}
        prevHandler={prevHandler}
        todayHandler={todayHandler}
        nextHandler={nextHandler}
      />
      <CalendarGrid 
        today={today}
        startDay={startDay} 
      />
    </section>
  )
}

export default TimeTable;