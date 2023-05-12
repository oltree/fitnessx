import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/hooks/hooks';

import { workoutsSelector } from '@/store/selectors';
import { getCurrentWorkout } from '@/store/slices/current-workout.slice';

import { DAYS } from '@/types/enams/days.enam';
import { RoutePaths } from '@/types/route.type';

import styles from './Calendar.module.scss';

import { renderEventContent } from './event-contents';

const Calendar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const workouts = useAppSelector(workoutsSelector);

  const handleEventClick = useCallback(
    (checkInfo: any) => {
      const foundWorkout = workouts.find(
        workout => workout.id === checkInfo.event.id
      );

      if (foundWorkout) {
        dispatch(getCurrentWorkout(foundWorkout));
        navigate(RoutePaths.WORKOUT);
      }
    },
    [dispatch, navigate, workouts]
  );

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
        eventClick={handleEventClick}
        events={workouts}
        firstDay={DAYS.MONDAY}
      />
    </div>
  );
};

export default memo(Calendar);
