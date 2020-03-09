import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import events from './events';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

let CalendarComponent = () => (
  <React.Fragment>
    <Calendar popup events={events} localizer={localizer} />
  </React.Fragment>
);

export default CalendarComponent;
