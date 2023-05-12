import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { addNotification } from '@/store/slices/notifications.slice';

import { EXERCISES } from '@/types/enams/exercises.enam';
import { ExerciseType } from '@/types/exercise.type';

import { getFormattedDate } from '@/utils/helpers/getFormattedDate';
import { getWeatherMessage } from '@/utils/helpers/getWeatherMessage';

export const useAddNotification = (exercises: ExerciseType[]) => {
  const dispatch = useDispatch();

  const isRunningWorkout = exercises.some(
    exercise => exercise.name === EXERCISES.LEGS
  );

  useEffect(() => {
    const addNotificationIfNeeded = async () => {
      if (isRunningWorkout) {
        const weatherMessage = await getWeatherMessage();
        const newNotification = {
          id: uuid(),
          message: weatherMessage,
          date: getFormattedDate(),
          isCompleted: false
        };

        dispatch(addNotification(newNotification));
      }
    };

    addNotificationIfNeeded();
  }, [isRunningWorkout, dispatch]);
};
