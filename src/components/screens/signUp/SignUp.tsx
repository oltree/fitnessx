import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';

import { RoutePaths } from '../../../types/routePaths';
import { AuthUserType } from '../../../types/user';

import styles from './SignUp.module.scss';

import Button from '../../common/button/Button';
import Input from '../../common/input/Input';

const SignUp: FC = () => {
	const [message, setMessage] = useState('');
	const [redirect, setRedirect] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<AuthUserType>();
	const navigate = useNavigate();

	const handleRegister = (data: AuthUserType) => {
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

			reset();
			setRedirect(true);
		}
	};

	useEffect(() => {
		if (redirect) {
			const timeout = setTimeout(() => {
				navigate(RoutePaths.SIGN_IN);
			}, 1000);

			return () => clearTimeout(timeout);
		}
	}, [redirect, navigate]);

	return (
		<div className={styles.signUp}>
			<p className={styles.subtitle}>Hey there,</p>
			<p className={styles.title}>Create an Account</p>
			<form onSubmit={handleSubmit(handleRegister)} className={styles.form}>
				<Input
					type='text'
					register={register('firstName', { required: true })}
					error={errors.firstName?.message}
					placeholder='First name'
				/>

				<Input
					type='text'
					register={register('lastName', { required: true })}
					error={errors.lastName?.message}
					placeholder='Last name'
				/>

				<Input
					type='email'
					register={register('email', { required: true })}
					error={errors.email?.message}
					placeholder='Email'
				/>

				<Input
					type='password'
					register={register('password', { required: true })}
					error={errors.password?.message}
					placeholder='Password'
					className={styles.lastInput}
				/>

				<Button className={styles.button}>Register</Button>
			</form>
			{message && (
				<p className={cn(styles.message, redirect && styles.message__success)}>
					{message}
				</p>
			)}
			<div className={styles.linkContainer}>
				<p>Already have an account?</p>
				<NavLink to={RoutePaths.SIGN_IN} className={styles.link}>
					Login
				</NavLink>
			</div>
		</div>
	);
};

export default SignUp;
