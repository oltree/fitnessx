import { FC, PropsWithChildren } from 'react';

import styles from './Layout.module.scss';

import Header from './header/Header';

interface LayoutProps extends PropsWithChildren {}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<section className={styles.wrapper}>
			<Header />
			{children}
		</section>
	);
};

export default Layout;
