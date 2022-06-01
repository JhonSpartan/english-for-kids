const CalendarControlls = ({today, prevHandler, todayHandler, nextHandler}) => {
  return (
    <div className="calendar-controlls">
      <div className="calendar-controlls__date">
        <span className="calendar-controlls__month">{today.format('MMMM')}</span>
        <span className="calendar-controlls__year">{today.format('YYYY')}</span>
      </div>
      <div className="calendar-controlls__buttons">
        <button 
          className="calendar-controlls__prev"
          onClick={prevHandler}
        > &lt; </button>
        <button 
          className="calendar-controlls__current"
          onClick={todayHandler}
        >Today</button>
        <button 
          className="calendar-controlls__next"
          onClick={nextHandler}
        > &gt; </button>
      </div>
    </div>
  )
}

export default CalendarControlls;