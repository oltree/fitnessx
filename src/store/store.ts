import {
	Action,
	ThunkAction,
	combineReducers,
	configureStore
} from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { PERSIST } from 'redux-persist/es/constants';
import storage from 'redux-persist/lib/storage';

import userSlice from './slices/authSlice';
import exercisesSlice from './slices/exerciseSlice';
import workoutsSlice from './slices/workoutSlice';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user', 'workouts']
};

const rootReducer = combineReducers({
	user: userSlice,
	exercises: exercisesSlice,
	workouts: workoutsSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [PERSIST]
			}
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
