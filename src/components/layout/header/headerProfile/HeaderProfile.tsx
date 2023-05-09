import { FC, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import IconButton from '@/components/common/iconButton/IconButton';

import { useAppDispatch } from '@/hooks/hooks';

import { userLogout } from '@/store/slices/userSlice';

import { RoutePaths } from '@/types/route.type';

import styles from './HeaderProfile.module.scss';

import logout from '@/assets/icons/logout.svg';
import notifications from '@/assets/icons/notifications.svg';
import profile from '@/assets/icons/profile.svg';

const HeaderProfile: FC = () => {
	const dispatch = useAppDispatch();
	const { pathname } = useLocation();
	const isProfile = pathname === RoutePaths.PROFILE;

	const handleLogout = useCallback(() => dispatch(userLogout()), [dispatch]);

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
					onClick={handleLogout}
					className={styles.button}
				/>
			)}
		</div>
	);
};

export default HeaderProfile;
