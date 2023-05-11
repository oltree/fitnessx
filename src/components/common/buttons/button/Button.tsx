import cn from 'classnames';
import { FC, PropsWithChildren } from 'react';

import styles from './Button.module.scss';

interface ButttonProps extends PropsWithChildren {
	className?: string;
}

const Button: FC<ButttonProps> = ({ children, className }) => (
	<button type='submit' className={cn(styles.button, className)}>
		{children}
	</button>
);

export default Button;
