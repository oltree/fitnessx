import { FC, memo } from 'react';

import { Banner, Calendar, WorkoutForm } from '@/components/common';

import styles from './Home.module.scss';

const Home: FC = () => (
  <div className={styles.home}>
    <div className={styles.creareConainer}>
      <Banner />
      <WorkoutForm />
    </div>
    <Calendar />
  </div>
);

export default memo(Home);
