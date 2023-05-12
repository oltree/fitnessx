import { FC, memo, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import IconButton from '@/components/common/buttons/icon-button/IconButton';

import { useAppDispatch } from '@/hooks/hooks';
import { useNotifications } from '@/hooks/useNotifications';

import { userLogout } from '@/store/slices/user.slice';

import { RoutePaths } from '@/types/route.type';

import styles from './HeaderProfile.module.scss';

import logoutIcon from '@/assets/icons/logout.svg';
import notificationsIcon from '@/assets/icons/notifications.svg';
import profileIcon from '@/assets/icons/profile.svg';

const HeaderProfile: FC = () => {
  const dispatch = useAppDispatch();

  const { pathname } = useLocation();
  const isProfile = pathname === RoutePaths.PROFILE;

  const notifications = useNotifications();
  const isNotifications = notifications.some(notice => !notice.isCompleted);

  const handleLogout = useCallback(() => {
    localStorage.clear();
    dispatch(userLogout());
  }, [dispatch]);

  return (
    <div className={styles.profile}>
      <div className={styles.notifications}>
        {isNotifications && <span className={styles.point} />}
        <IconButton
          link={RoutePaths.NOTIFICATIONS}
          icon={notificationsIcon}
          text='notifications'
          className={styles.button}
        />
      </div>

      {isProfile ? (
        <IconButton
          link={RoutePaths.SIGN_IN}
          icon={logoutIcon}
          text='logout'
          onClick={handleLogout}
          className={styles.button}
        />
      ) : (
        <IconButton
          link={RoutePaths.PROFILE}
          icon={profileIcon}
          text='profile'
          className={styles.button}
        />
      )}
    </div>
  );
};

export default memo(HeaderProfile);
