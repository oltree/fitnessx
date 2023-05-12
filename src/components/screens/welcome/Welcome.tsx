import { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';

import Button from '@/components/common/buttons/button/Button';

import { useAuth } from '@/hooks/useAuth';

import { RoutePaths } from '@/types/route.type';

import styles from './Welcome.module.scss';

const Welcome: FC = () => {
  const isAuth = useAuth();
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

export default memo(Welcome);
