import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { memo } from 'react';

import { useAppSelector } from '@/hooks/hooks';

import { workoutsSelector } from '@/store/selectors';

import { DAYS } from '@/types/enams/days.enam';

import styles from './Calendar.module.scss';

import { dayCellContent } from './day-content';
import { renderEventContent } from './event-content';
import { useCalendarEvents } from './useCalendarEvents';

const Calendar = () => {
  const workouts = useAppSelector(workoutsSelector);

  const { onEventDrop, onEventClick } = useCalendarEvents(workouts);

  return (
    <div className={styles.calendar}>
      <FullCalendar
        height='100%'
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'prev today next',
          right: 'title'
        }}
        initialView='dayGridMonth'
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        eventContent={renderEventContent}
        eventClick={onEventClick}
        events={workouts}
        eventDrop={onEventDrop}
        firstDay={DAYS.MONDAY}
        dayCellContent={dayCellContent}
      />
    </div>
  );
};

export default memo(Calendar);
