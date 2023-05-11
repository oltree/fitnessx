import cn from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import Button from '@/components/common/buttons/button/Button';
import Input from '@/components/common/input/Input';
import Loader from '@/components/common/loader/Loader';

import { useRedirect } from '@/hooks/useRedirect';

import { RoutePaths } from '@/types/route.type';

import styles from './SignIn.module.scss';

import { useSignIn } from './useSignIn';

const SignIn: FC = () => {
	const { message, redirect, errors, register, onSubmit } = useSignIn();

	useRedirect(redirect, RoutePaths.HOME, 1000);

	if (redirect) {
		return <Loader />;
	}

	return (
		<div className={styles.signIn}>
			<p className={styles.subtitle}>Hey there,</p>
			<p className={styles.title}>Welcome Back</p>
			<form onSubmit={onSubmit} className={styles.form}>
				<Input
					type='email'
					register={register('email', { required: 'Email is required!' })}
					error={errors.email?.message}
					placeholder='Email'
				/>

				<Input
					type='password'
					register={register('password', { required: 'Password is required!' })}
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
				<p>Don't have an account yet?</p>
				<NavLink to={RoutePaths.SIGN_UP} className={styles.link}>
					Register
				</NavLink>
			</div>
		</div>
	);
};

export default SignIn;
