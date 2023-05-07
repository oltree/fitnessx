import { FC, PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';

import { RoutePaths } from '@/types/routes';

import styles from './Layout.module.scss';

import Header from './header/Header';

interface LayoutProps extends PropsWithChildren {}

const Layout: FC<LayoutProps> = ({ children }) => {
	const location = useLocation();
	const showHeader =
		location.pathname !== RoutePaths.WELCOME &&
		location.pathname !== RoutePaths.SIGN_IN &&
		location.pathname !== RoutePaths.SIGN_UP;

	return (
		<div className={styles.wrapper}>
			{showHeader && <Header />}
			{children}
		</div>
	);
};

export default Layout;
