import { workoutsSelector } from '@/store/selectors';

import { useAppSelector } from './hooks';

export const useWorkouts = () => {
  const workouts = useAppSelector(workoutsSelector);

  return workouts;
};
