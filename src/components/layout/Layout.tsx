import { FC, PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';

import { RoutePaths } from '@/types/routePaths';

import styles from './Layout.module.scss';

import Header from './header/Header';

interface LayoutProps extends PropsWithChildren {}

const Layout: FC<LayoutProps> = ({ children }) => {
	const { pathname } = useLocation();
	const showHeader =
		pathname !== RoutePaths.WELCOME &&
		pathname !== RoutePaths.SIGN_IN &&
		pathname !== RoutePaths.SIGN_UP;

	return (
		<section className={styles.wrapper}>
			{showHeader && <Header />}
			{children}
		</section>
	);
};

export default Layout;
