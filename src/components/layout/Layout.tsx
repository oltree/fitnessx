import { FC, PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppSelector } from '@/hooks/hooks';

import { authSelector } from '@/store/selectors/authSelector';

import styles from './Layout.module.scss';

import Header from './header/Header';
import { showHeader } from '@/utils/helpers/showHeader';

interface LayoutProps extends PropsWithChildren {}

const Layout: FC<LayoutProps> = ({ children }) => {
	const { isAuth } = useAppSelector(authSelector);
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
