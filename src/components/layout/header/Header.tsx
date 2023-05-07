import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import IconButton from '@/components/common/iconButton/IconButton';

import { useAuth } from '@/hooks/useAuth';

import { RoutePaths } from '@/types/routePaths';
import { UserType } from '@/types/user';

import styles from './Header.module.scss';

import HeaderProfile from './headerProfile/HeaderProfile';
import left from '@/assets/icons/left.svg';
import { routes } from '@/routes/routes';

interface HeaderProps {
	backLink?: string;
}

const Header: FC<HeaderProps> = ({ backLink = '' }) => {
	const { isAuth } = useAuth();
	const { pathname } = useLocation();
	const isBack = pathname !== RoutePaths.HOME;
	const pageTitle = pathname.split('/')[1];
	const isNotFound = routes.find(route => route.path === pathname);

	const users: UserType[] = JSON.parse(localStorage.getItem('users') || '[]');
	const userName = `${users[0]?.firstName} ${users[0]?.lastName}`;

	return (
		<header className={styles.header}>
			{isBack ? (
				<IconButton
					link={backLink}
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
			{isNotFound && <p className={styles.pageTitle}>{pageTitle}</p>}
			<HeaderProfile />
		</header>
	);
};

export default Header;
