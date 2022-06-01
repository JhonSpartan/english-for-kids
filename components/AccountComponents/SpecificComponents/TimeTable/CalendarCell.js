const CalendarCell = (props) => {
  const cellClasses = ['calendar-cell'];
  props.isWeekend ? cellClasses.push('calendar-cell--weekend') : cellClasses.push('calendar-cell--non-weekend');
  props.isCurrentMonth ? cellClasses.push('calendar-cell--current-month') : cellClasses.push('calendar-cell--non-current-month');

  const cellWarapper = ['cell-date-wrapper'];
  if (props.isCurrentDay) {
    cellWarapper.push('cell-date-wrapper--current')
  }

  return (
    <div 
      className={cellClasses.join(' ')} 
      onClick={props.showDay}
      day-data={props.dayItem.format('dddd D MMMM YYYY')}
    >
      <div className="cell-row">
        <div className="cell-date">
          <div className={cellWarapper.join(' ')}>
            {props.dayItem.format('D')}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalendarCell;