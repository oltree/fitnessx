import { FC, PropsWithChildren } from 'react';

import styles from './Layout.module.scss';

interface LayoutProps extends PropsWithChildren {}

const Layout: FC<LayoutProps> = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};

export default Layout;
