import { RootState } from '../store';

export const currentWorkoutSelector = (state: RootState) => state.workout;
