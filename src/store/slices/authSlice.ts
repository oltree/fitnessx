import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AuthUserType, UserType } from '@/types/user';

const initialState: UserType = {
	email: '',
	firstName: '',
	lastName: '',
	isAuth: false
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserFromLocalStorage: (
			state: UserType,
			{ payload }: PayloadAction<AuthUserType>
		) => {
			state.email = payload.email;
			state.firstName = payload.firstName;
			state.lastName = payload.lastName;
			state.isAuth = true;
		}
	}
});

export const { setUserFromLocalStorage } = userSlice.actions;

export default userSlice.reducer;
