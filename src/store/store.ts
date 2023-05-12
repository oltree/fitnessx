import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore
} from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  currentWorkoutSlice,
  exercisesSlice,
  notificationsSlice,
  userSlice,
  workoutsSlice
} from './slices';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'workouts', 'notifications']
};

const rootReducer = combineReducers({
  user: userSlice,
  exercises: exercisesSlice,
  workouts: workoutsSlice,
  notifications: notificationsSlice,
  workout: currentWorkoutSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
