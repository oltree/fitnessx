import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Workout } from '@/types/workout.type';

const initialState: Workout[] = [];

const workoutsSlice = createSlice({
	name: 'workouts',
	initialState,
	reducers: {
		addWorkout: (state, { payload }: PayloadAction<Workout>) => {
			state.push(payload);
		},
		deleteWorkout: (state, { payload: id }: PayloadAction<string>) => {
			const foundIndex = state.findIndex(workout => workout.id === id);
			if (foundIndex !== -1) {
				state.splice(foundIndex, 1);
			}
		},
		updateWorkout: (state, { payload }: PayloadAction<Workout>) => {
			const foundIndex = state.findIndex(workout => workout.id === payload.id);
			if (foundIndex !== -1) {
				state[foundIndex] = payload;
			}
		}
	}
});

export const { addWorkout, deleteWorkout, updateWorkout } =
	workoutsSlice.actions;

export default workoutsSlice.reducer;
