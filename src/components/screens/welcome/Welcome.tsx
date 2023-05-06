import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Welcome.module.scss';

import Button from '../../common/button/Button';

const Welcome: FC = () => {
	return (
		<div className={styles.welcome}>
			<p className={styles.title}>
				Fitness<span>X</span>
			</p>
			<p className={styles.subtitle}>Everybody Can Train</p>
			<div className={styles.button}>
				<NavLink to='/signup'>
					<Button>Get Started</Button>
				</NavLink>
			</div>
		</div>
	);
};

export default Welcome;
