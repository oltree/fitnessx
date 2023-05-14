import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';

import { useAppDispatch } from '@/hooks/hooks';

import { addNotification } from '@/store/slices/notifications.slice';
import { setUserFromLocalStorage } from '@/store/slices/user.slice';

import { AuthUserType } from '@/types/user.type';

import { getFormattedDate } from '@/utils/helpers/getFormattedDate';

export const useSignIn = () => {
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState('');
  const [redirect, setRedirect] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<AuthUserType>({ mode: 'onChange' });

  const loginUser = (data: AuthUserType) => {
    const { email, password } = data;
    const users: AuthUserType[] = JSON.parse(
      localStorage.getItem('users') || '[]'
    );
    const userExists = users.find(
      (user: AuthUserType) => user.email === email && user.password === password
    );

    if (userExists) {
      dispatch(setUserFromLocalStorage(userExists));

      const newNotification = {
        id: uuid(),
        date: getFormattedDate(new Date()),
        message: 'login successful!',
        isCompleted: false
      };
      dispatch(addNotification(newNotification));

      setRedirect(true);
    } else {
      setMessage('Invalid password or email!');
    }

    reset();
  };

  const onSubmit = handleSubmit(loginUser);

  return { message, redirect, errors, register, onSubmit };
};
