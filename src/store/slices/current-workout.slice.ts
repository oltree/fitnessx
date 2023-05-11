import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Workout } from '@/types/workout.type';

const initialState: Workout = {
	id: '',
	date: new Date(),
	title: 'string',
	exercises: []
};

const currentWorkoutSlice = createSlice({
	name: 'current-workout',
	initialState,
	reducers: {
		getCurrentWorkout: (state, { payload }: PayloadAction<Workout>) => {
			state.id = payload.id;
			state.date = payload.date;
			state.title = payload.title;
			state.exercises = payload.exercises;
		},
		updateExerciseInCurrentWorkout: (
			state,
			{ payload: exerciseId }: PayloadAction<string>
		) => {
			const exerciseToUpdate = state.exercises.find(
				exercise => exercise.id === exerciseId
			);
			if (exerciseToUpdate) {
				exerciseToUpdate.isCompleted = true;
			}
		}
	}
});

export const { getCurrentWorkout, updateExerciseInCurrentWorkout } =
	currentWorkoutSlice.actions;

export default currentWorkoutSlice.reducer;
