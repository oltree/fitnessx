import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ExerciseType } from '@/types/exercise.type';

const initialState: ExerciseType[] = [];

export const exersisesSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {
    addExercise: (state, { payload }: PayloadAction<ExerciseType>) => {
      state.push(payload);
    },
    removeExercise: (state, { payload: id }: PayloadAction<string>) => {
      const foundIndex = state.findIndex(exercise => exercise.id === id);
      if (foundIndex !== -1) {
        state.splice(foundIndex, 1);
      }
    },
    removeAllExercise: state => {
      state.splice(0, state.length);
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

export const {
  addExercise,
  removeExercise,
  updateExercise,
  removeAllExercise
} = exersisesSlice.actions;

export default exersisesSlice.reducer;
