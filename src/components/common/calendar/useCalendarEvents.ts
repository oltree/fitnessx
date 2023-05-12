import { EventClickArg, EventDropArg } from '@fullcalendar/core';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '@/hooks/hooks';

import { getCurrentWorkout } from '@/store/slices/current-workout.slice';
import { updateWorkout } from '@/store/slices/workouts.slice';

import { RoutePaths } from '@/types/route.type';
import { Workout } from '@/types/workout.type';

export const useCalendarEvents = (workouts: Workout[]) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFindWorkout = useCallback(
    (id: string) => workouts.find(workout => workout.id === id),
    [workouts]
  );

  const handleEventDrop = useCallback(
    (checkInfo: EventDropArg) => {
      const { id, start } = checkInfo.event;
      const foundWorkout = handleFindWorkout(id);

      if (foundWorkout && start) {
        dispatch(updateWorkout({ ...foundWorkout, date: start }));
      }
    },
    [dispatch, handleFindWorkout]
  );

  const handleEventClick = useCallback(
    (checkInfo: EventClickArg) => {
      const { id } = checkInfo.event;
      const foundWorkout = handleFindWorkout(id);

      if (foundWorkout) {
        dispatch(getCurrentWorkout(foundWorkout));
        navigate(RoutePaths.WORKOUT);
      }
    },
    [dispatch, navigate, handleFindWorkout]
  );

  return { onEventDrop: handleEventDrop, onEventClick: handleEventClick };
};
