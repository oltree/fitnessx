import biceps from '@/assets/icons/exercises/biceps.svg';
import chest from '@/assets/icons/exercises/chest.svg';
import hit from '@/assets/icons/exercises/hit.svg';
import legs from '@/assets/icons/exercises/legs.svg';
import shoulders from '@/assets/icons/exercises/shoulders.svg';

type ExerciseName = {
  name: string;
  icon: string;
};

export const exercisesNames: ExerciseName[] = [
  {
    name: 'biceps',
    icon: biceps
  },
  {
    name: 'chest',
    icon: chest
  },
  {
    name: 'hit',
    icon: hit
  },
  {
    name: 'legs',
    icon: legs
  },
  {
    name: 'shoulders',
    icon: shoulders
  }
];
