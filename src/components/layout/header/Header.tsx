import { FC } from 'react';

import styles from './Header.module.scss';

import left from '../../../assets/icons/left.svg';

interface HeaderProps {
	backLink: string;
}

const Header: FC<HeaderProps> = ({ backLink }) => {
	return (
		<header className={styles.header}>
			<button>
				<img src={left} alt='go back' />
			</button>
			lol
		</header>
	);
};

export default Header;
