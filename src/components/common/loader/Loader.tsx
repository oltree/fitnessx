import { FC } from 'react';

import styles from './Loader.module.scss';

import loader from '@/assets/icons/loader.svg';

const Loader: FC = () => (
	<div className={styles.loader}>
		<img src={loader} alt='loader' draggable={false} width={90} />
	</div>
);

export default Loader;
