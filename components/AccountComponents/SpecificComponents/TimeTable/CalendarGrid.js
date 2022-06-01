import React from "react";
import moment from "moment";
import styled from "styled-components";
import CalendarCell from "./CalendarCell";

// const CalendarCell = styled.div`
// min-width: 14rem;
// min-height: 8rem;
// background-color: #1e1f21;
// color: #dddcdd;
// `;

const CalendarGrid = ({startDay, today}) => {
  // const cellClasses = ['calendar-cell'];
  // if (props.isWeekend) {
  //   cellClasses.push('calendar-cell--weekend')
  // } else {
  //   cellClasses.push('calendar-cell--non-weekend')
  // }

  const totalDays = 42;
  const day = startDay.clone();
  const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

  const isCurrentDay = (day) => moment().isSame(day, 'day');
  const isCurrentMonth = (day) => today.isSame(day, 'month');
  const showDay = (e) => console.log(e.target.getAttribute('day-data'));

  return (
    <React.Fragment>
      <div className="calendar-grid calendar-grid--header">
        {[...Array(7)].map((_, index) => 
          <div key={index}>
            <div className="cell-row cell-row--day">
              {moment().day(index + 1).format('ddd')}
            </div>
          </div>
        )}
      </div> 
      <div className="calendar-grid">
        {daysArray.map((dayItem) => (
          <CalendarCell 
            key={dayItem.unix()}
            isWeekend={dayItem.day() === 0}
            isCurrentDay={isCurrentDay(dayItem)}
            dayItem={dayItem}
            isCurrentMonth={isCurrentMonth(dayItem)}
            showDay={showDay}
          />
        ))}
      </div>  
    </React.Fragment>
  )
}

export default CalendarGrid;