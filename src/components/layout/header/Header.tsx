import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import IconButton from '@/components/common/iconButton/IconButton';

import { useAppSelector } from '@/hooks/hooks';

import { authSelector } from '@/store/selectors/authSelector';

import { RoutePaths } from '@/types/routePaths';
import { UserType } from '@/types/user';

import styles from './Header.module.scss';

import HeaderProfile from './headerProfile/HeaderProfile';
import left from '@/assets/icons/left.svg';

const Header: FC = () => {
	const { pathname } = useLocation();
	const isBack = pathname !== RoutePaths.HOME;
	const pageTitle = pathname.split('/')[1];

	const user: UserType = useAppSelector(authSelector);
	const userName = `${user.firstName} ${user.lastName}`;

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
