import { ExerciseType } from './exercise.type';

export interface Workout {
  id: string;
  date: Date;
  title: string;
  exercises: ExerciseType[];
}
