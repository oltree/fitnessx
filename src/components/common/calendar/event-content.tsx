import { EventDropArg } from '@fullcalendar/core';
import cn from 'classnames';

import { ExerciseType } from '@/types/exercise.type';

import styles from './Calendar.module.scss';

export const renderEventContent = (eventInfo: EventDropArg) => {
  const isSuccess = eventInfo.event.extendedProps.exercises.every(
    (exercise: ExerciseType) => exercise.isCompleted
  );

  return (
    <div className={cn(styles.workout, isSuccess && styles.workout__success)}>
      <p className={styles.title}>{eventInfo.event.title}</p>
    </div>
  );
};
