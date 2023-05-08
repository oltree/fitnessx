import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import Button from '@/components/common/button/Button';

import { useAppSelector } from '@/hooks/hooks';

import { authSelector } from '@/store/selectors/authSelector';

import { RoutePaths } from '@/types/routePaths';

import styles from './Welcome.module.scss';

const Welcome: FC = () => {
	const { isAuth } = useAppSelector(authSelector);
	const linkTo = isAuth ? RoutePaths.HOME : RoutePaths.SIGN_IN;

	return (
		<div className={styles.welcome}>
			<p className={styles.title}>
				Fitness<span>X</span>
			</p>
			<p className={styles.subtitle}>Everybody Can Train</p>
			<div className={styles.button}>
				<NavLink to={linkTo}>
					<Button>Get Started</Button>
				</NavLink>
			</div>
		</div>
	);
};

export default Welcome;
