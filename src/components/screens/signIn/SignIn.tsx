import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';

import Button from '@/components/common/button/Button';
import Input from '@/components/common/input/Input';

import { useAppDispatch } from '@/hooks/hooks';

import { setUserFromLocalStorage } from '@/store/slices/authSlice';

import { RoutePaths } from '@/types/routePaths';
import { AuthUserType } from '@/types/user';

import styles from './SignIn.module.scss';

const SignIn: FC = () => {
	const dispatch = useAppDispatch();
	const [message, setMessage] = useState('');
	const [redirect, setRedirect] = useState(false);
	const [users, setUsers] = useState<AuthUserType[]>([]);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<AuthUserType>();
	const navigate = useNavigate();

	useEffect(() => {
		const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
		setUsers(storedUsers);
	}, []);

	const handleLogin = (data: AuthUserType) => {
		const { email, password } = data;
		const userExists = users.find(
			(user: AuthUserType) => user.email === email && user.password === password
		);

		if (userExists) {
			dispatch(setUserFromLocalStorage(users[0]));
			setMessage('Login successful!');
			setRedirect(true);

			reset();
		} else {
			setMessage('Invalid password or email!');

			reset();
		}
	};

	useEffect(() => {
		if (redirect) {
			const timeout = setTimeout(() => {
				navigate(RoutePaths.HOME);
			}, 2000);

			return () => clearTimeout(timeout);
		}
	}, [redirect, navigate]);

	return (
		<div className={styles.signIn}>
			<p className={styles.subtitle}>Hey there,</p>
			<p className={styles.title}>Welcome Back</p>
			<form onSubmit={handleSubmit(handleLogin)} className={styles.form}>
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

				<Button className={styles.button}>Login</Button>
			</form>
			{message && (
				<p className={cn(styles.message, redirect && styles.message__success)}>
					{message}
				</p>
			)}
			<div className={styles.linkContainer}>
				<p>Don’t have an account yet?</p>
				<NavLink to={RoutePaths.SIGN_UP} className={styles.link}>
					Register
				</NavLink>
			</div>
		</div>
	);
};

export default SignIn;
