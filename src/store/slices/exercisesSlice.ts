import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ExerciseType } from '@/types/exercise.type';

const initialState: ExerciseType[] = [];

export const exersisesSlice = createSlice({
	name: 'workout',
	initialState,
	reducers: {
		addExercise: (state, { payload }: PayloadAction<ExerciseType>) => {
			state.push(payload);
		},
		removeExercise: (state, { payload: id }: PayloadAction<string>) => {
			state = state.filter(exercise => exercise.id !== id);
		},
		updateExercise: (state, { payload }: PayloadAction<ExerciseType>) => {
			const foundIndex = state.findIndex(
				exercise => exercise.id === payload.id
			);
			if (foundIndex !== -1) {
				state[foundIndex] = payload;
			}
		}
	}
});

export const { addExercise, removeExercise, updateExercise } =
	exersisesSlice.actions;

export default exersisesSlice.reducer;
