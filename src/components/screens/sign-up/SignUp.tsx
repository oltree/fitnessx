import cn from 'classnames';
import { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';

import Button from '@/components/common/buttons/button/Button';
import Input from '@/components/common/input/Input';
import Loader from '@/components/common/loader/Loader';

import { useRedirect } from '@/hooks/useRedirect';

import { RoutePaths } from '@/types/route.type';

import styles from './SignUp.module.scss';

import { useSignUp } from './useSignUp';

const SignUp: FC = () => {
  const { message, redirect, errors, register, onSubmit } = useSignUp();

  useRedirect(redirect, RoutePaths.SIGN_IN, 1000);

  if (redirect) {
    return <Loader />;
  }

  return (
    <div className={styles.signUp}>
      <p className={styles.subtitle}>Hey there,</p>
      <p className={styles.title}>Create an Account</p>
      <form onSubmit={onSubmit} className={styles.form}>
        <Input
          type='text'
          register={register('firstName', {
            required: 'First name is required!'
          })}
          error={errors.firstName?.message}
          placeholder='First name'
        />

        <Input
          type='text'
          register={register('lastName', {
            required: 'Last name is required!'
          })}
          error={errors.lastName?.message}
          placeholder='Last name'
        />

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

        <Button className={styles.button}>Register</Button>
      </form>
      <div className={styles.linkContainer}>
        <p>Already have an account?</p>
        <NavLink to={RoutePaths.SIGN_IN} className={styles.link}>
          Login
        </NavLink>
      </div>

      {message && (
        <p className={cn(styles.message, redirect && styles.message__success)}>
          {message}
        </p>
      )}
    </div>
  );
};

export default memo(SignUp);
