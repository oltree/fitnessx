import cn from 'classnames';
import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import styles from './Input.module.scss';

type InputProps = {
	type: string;
	register: UseFormRegisterReturn<string>;
	error?: string;
	placeholder?: string;
	className?: string;
};

const Input: FC<InputProps> = ({
	type,
	register,
	error,
	placeholder,
	className
}) => (
	<input
		type={type}
		{...register}
		autoComplete='on'
		placeholder={placeholder}
		className={cn(styles.input, error && styles.input__error, className)}
	/>
);

export default Input;
