import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ExerciseType } from '@/types/exercise.type';

interface Workout {
	id: string;
	name: string;
	exercises: ExerciseType[];
}

interface WorkoutsState {
	workouts: Workout[];
}

const initialState: WorkoutsState = {
	workouts: []
};

const workoutsSlice = createSlice({
	name: 'workouts',
	initialState,
	reducers: {
		addWorkout: (state, { payload }: PayloadAction<Workout>) => {
			state.workouts.push(payload);
		},
		deleteWorkout: (state, { payload: id }: PayloadAction<string>) => {
			state.workouts = state.workouts.filter(workout => workout.id !== id);
		},
		updateWorkout: (state, { payload }: PayloadAction<Workout>) => {
			const foundIndex = state.workouts.findIndex(
				workout => workout.id === payload.id
			);
			if (foundIndex !== -1) {
				state.workouts[foundIndex] = payload;
			}
		}
	}
});

export const { addWorkout, deleteWorkout, updateWorkout } =
	workoutsSlice.actions;

export default workoutsSlice.reducer;
