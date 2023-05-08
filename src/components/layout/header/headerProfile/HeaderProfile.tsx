import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import IconButton from '@/components/common/iconButton/IconButton';

import { RoutePaths } from '@/types/route.type';

import styles from './HeaderProfile.module.scss';

import logout from '@/assets/icons/logout.svg';
import notifications from '@/assets/icons/notifications.svg';
import profile from '@/assets/icons/profile.svg';

const HeaderProfile: FC = () => {
	const { pathname } = useLocation();
	const isProfile = pathname === RoutePaths.PROFILE;

	return (
		<div className={styles.profile}>
			<IconButton
				link={RoutePaths.NOTIFICATIONS}
				icon={notifications}
				text='notifications'
				className={styles.button}
			/>
			<IconButton
				link={RoutePaths.PROFILE}
				icon={profile}
				text='profile'
				className={styles.button}
			/>
			{isProfile && (
				<IconButton
					link={RoutePaths.SIGN_IN}
					icon={logout}
					text='logout'
					className={styles.button}
				/>
			)}
		</div>
	);
};

export default HeaderProfile;
