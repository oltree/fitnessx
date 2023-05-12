import { currentWorkoutSelector } from '@/store/selectors';

import { useAppSelector } from './hooks';

export const useWorkout = () => {
  const workout = useAppSelector(currentWorkoutSelector);

  return workout;
};
