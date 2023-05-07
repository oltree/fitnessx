import cn from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './IconButton.module.scss';

interface IconButtonProps {
	link: string;
	icon: string;
	text: string;
	className?: string;
}

const IconButton: FC<IconButtonProps> = ({ link, icon, text, className }) => (
	<NavLink to={link}>
		<button className={cn(styles.button, className)}>
			<img src={icon} alt={text} />
		</button>
	</NavLink>
);

export default IconButton;
