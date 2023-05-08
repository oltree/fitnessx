import { FC, PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';

import { useAuth } from '@/hooks/useAuth';

import styles from './Layout.module.scss';

import Header from './header/Header';
import { showHeader } from '@/utils/helpers/showHeader';

interface LayoutProps extends PropsWithChildren {}

const Layout: FC<LayoutProps> = ({ children }) => {
	const isAuth = useAuth();
	const { pathname } = useLocation();
	const isShowHeader = showHeader(pathname, isAuth);

	return (
		<section className={styles.wrapper}>
			{isShowHeader && <Header />}
			{children}
		</section>
	);
};

export default Layout;
