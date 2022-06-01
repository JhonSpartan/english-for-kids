import React from 'react';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';


const Schedule = () => {
  return (
    <section className="schedule">
      <ScheduleComponent currentView="Month">
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda]}
        ></Inject>
      </ScheduleComponent>
    </section>
  )
}

export default Schedule;