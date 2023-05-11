import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';

import { useAppDispatch } from '@/hooks/hooks';

import { addNotification } from '@/store/slices/notifications.slice';
import { setUserFromLocalStorage } from '@/store/slices/user.slice';

import { AuthUserType } from '@/types/user.type';

import { useStoredUsers } from './useStoredUsers';
import { getFormattedDate } from '@/utils/helpers/getDate';

export const useSignIn = () => {
	const dispatch = useAppDispatch();
	const [message, setMessage] = useState('');
	const [redirect, setRedirect] = useState(false);
	const users = useStoredUsers();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<AuthUserType>({ mode: 'onChange' });

	const loginUser = (data: AuthUserType) => {
		const { email, password } = data;
		const userExists = users.find(
			(user: AuthUserType) => user.email === email && user.password === password
		);

		if (userExists) {
			dispatch(setUserFromLocalStorage(users[0]));
			setMessage('Login successful!');

			const newNotification = {
				id: uuid(),
				message: 'Login successful!',
				date: getFormattedDate(),
				isCompleted: false
			};
			dispatch(addNotification(newNotification));

			setRedirect(true);

			reset();
		} else {
			setMessage('Invalid password or email!');

			reset();
		}
	};

	const onSubmit = handleSubmit(loginUser);

	return { message, redirect, errors, register, onSubmit };
};

export type signInReturnType = ReturnType<typeof useSignIn>;
