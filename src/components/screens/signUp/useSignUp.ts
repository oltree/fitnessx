import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { AuthUserType } from '@/types/user.type';

export const useSignUp = () => {
	const [message, setMessage] = useState('');
	const [redirect, setRedirect] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<AuthUserType>({ mode: 'onChange' });

	const registerUser = (data: AuthUserType) => {
		const { firstName, lastName, email, password } = data;
		const newUser: AuthUserType = { firstName, lastName, email, password };

		const users: AuthUserType[] = JSON.parse(
			localStorage.getItem('users') || '[]'
		);
		const userExists = users.find((user: AuthUserType) => user.email === email);

		if (userExists) {
			setMessage('User with this email already exists!');
		} else {
			setMessage('Registration completed successfully!');

			const updatedUsers = [...users, newUser];
			localStorage.setItem('users', JSON.stringify(updatedUsers));

			setRedirect(true);

			reset();
		}
	};

	const onSubmit = handleSubmit(registerUser);

	return { message, redirect, errors, register, onSubmit };
};

export type signUpReturnType = ReturnType<typeof useSignUp>;
