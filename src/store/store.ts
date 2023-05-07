import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import userSlice from '@/store/slices/authSlice';

export const store = configureStore({
	reducer: {
		user: userSlice
	}
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
