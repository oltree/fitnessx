import { ExerciseType } from './exercise.type';

export interface Workout {
	id: string;
	date: Date;
	name: string;
	exercises: ExerciseType[];
}
