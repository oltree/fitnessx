import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ExerciseType } from '@/types/exercise.type';

export interface ExercisesState {
	exercises: ExerciseType[];
}

const initialState: ExercisesState = {
	exercises: []
};

export const exersisesSlice = createSlice({
	name: 'workout',
	initialState,
	reducers: {
		addExercise: (state, { payload }: PayloadAction<ExerciseType>) => {
			state.exercises.push(payload);
		},
		removeExercise: (state, { payload: id }: PayloadAction<string>) => {
			state.exercises = state.exercises.filter(exercise => exercise.id !== id);
		},
		updateExercise: (state, { payload }: PayloadAction<ExerciseType>) => {
			const foundIndex = state.exercises.findIndex(
				exercise => exercise.id === payload.id
			);
			if (foundIndex !== -1) {
				state.exercises[foundIndex] = payload;
			}
		}
	}
});

export const { addExercise, removeExercise, updateExercise } =
	exersisesSlice.actions;

export default exersisesSlice.reducer;
