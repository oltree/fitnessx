import { FC, memo } from 'react';

import Banner from '@/components/common/banner/Banner';
import Calendar from '@/components/common/calendar/Calendar';
import WorkoutForm from '@/components/common/workout-form/WorkoutForm';

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
