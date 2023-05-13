import { EventDropArg } from '@fullcalendar/core';
import cn from 'classnames';

import { ExerciseType } from '@/types/exercise.type';

import styles from './Calendar.module.scss';

import { isPastDate } from '@/utils/helpers/isPastDate';

export const renderEventContent = (eventInfo: EventDropArg) => {
  const { extendedProps, start } = eventInfo.event;
  const isSuccess =
    extendedProps.exercises.every(
      (exercise: ExerciseType) => exercise.isCompleted
    ) && extendedProps.exercises.length !== 0;
  const isReject =
    (!isSuccess && isPastDate(start as Date)) ||
    extendedProps.exercises.length === 0;

  return (
    <div
      className={cn(
        styles.workout,
        isSuccess && styles.workout__success,
        isReject && styles.workout__reject
      )}
    >
      <p className={styles.title}>{eventInfo.event.title}</p>
    </div>
  );
};
