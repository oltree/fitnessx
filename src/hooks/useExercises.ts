import { exercisesSelector } from '@/store/selectors';

import { useAppSelector } from './hooks';

export const useExercises = () => {
  const exercises = useAppSelector(exercisesSelector);

  return exercises;
};
