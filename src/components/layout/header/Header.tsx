import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import IconButton from '@/components/common/buttons/icon-button/IconButton';

import { useAuth } from '@/hooks/useAuth';
import { useUser } from '@/hooks/useUserInfo';

import { RoutePaths } from '@/types/route.type';

import styles from './Header.module.scss';

import HeaderProfile from './header-profile/HeaderProfile';
import left from '@/assets/icons/left.svg';
import { shouldShowHeader } from '@/utils/helpers/shouldShowHeader';

const Header: FC = () => {
	const isAuth = useAuth();
	const { pathname } = useLocation();
	const isBack = pathname !== RoutePaths.HOME;
	const pageTitle = pathname.split('/')[1];

	const { firstName, lastName } = useUser();
	const userName = `${firstName} ${lastName}`;

	const isShowHeader = shouldShowHeader(pathname, isAuth);

	if (!isShowHeader) return null;

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
			<p className={styles.pageTitle}>{isBack && pageTitle}</p>
			<HeaderProfile />
		</header>
	);
};

export default Header;
