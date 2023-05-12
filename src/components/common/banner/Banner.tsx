import { FC, memo } from 'react';

import styles from './Banner.module.scss';

import bannerPie from '@/assets/images/banner-pie.png';

const Banner: FC = () => (
  <div className={styles.banner}>
    <div className={styles.content}>
      <p className={styles.tilte}>BMI (Body Mass Index)</p>
      <p className={styles.subtitle}>You have a normal weight</p>
      <a
        target='_blank'
        rel='noreferrer'
        href='https://www.msdmanuals.com/medical-calculators/BodyMassIndex-ru.htm'
        className={styles.link}
      >
        View More
      </a>
    </div>
    <img src={bannerPie} alt='banner pie' />
  </div>
);

export default memo(Banner);
