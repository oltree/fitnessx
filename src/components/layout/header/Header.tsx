import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import IconButton from '@/components/common/iconButton/IconButton';

import { useAuth } from '@/hooks/useAuth';

import { RoutePaths } from '@/types/routes';
import { UserType } from '@/types/user';

import styles from './Header.module.scss';

import HeaderProfile from './headerProfile/HeaderProfile';
import left from '@/assets/icons/left.svg';

const Header: FC = () => {
	const { isAuth } = useAuth();
	const location = useLocation();
	const isBack = location.pathname !== RoutePaths.HOME;
	const pageTitle = location.pathname.split('/')[1];

	const users: UserType[] = JSON.parse(localStorage.getItem('users') || '[]');
	const userName = `${users[0]?.firstName} ${users[0]?.lastName}`;

	return (
		<header className={styles.header}>
			{isBack ? (
				<IconButton
					link={RoutePaths.HOME}
					icon={left}
					text='go back'
					className={styles.buttonBack}
				/>
			) : (
				<div className={styles.welcome}>
					<p className={styles.text}>Welcome Back,</p>
					<p className={styles.user}>{userName}</p>
				</div>
			)}
			<p className={styles.pageTitle}>{pageTitle}</p>
			<HeaderProfile />
		</header>
	);
};

export default Header;
