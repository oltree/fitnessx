import { FC, memo } from 'react';

import styles from './NotFound.module.scss';

import notFound from '@/assets/images/not-found.png';

const NotFound: FC = () => (
  <div className={styles.wrapper}>
    <img src={notFound} alt='not found' />
    <p className={styles.text}>Page not found!</p>
  </div>
);

export default memo(NotFound);
