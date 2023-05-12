import { DayCellContentArg } from '@fullcalendar/core';

import styles from './Calendar.module.scss';

export const dayCellContent = (args: DayCellContentArg) => {
  const dayOfMonth = args.dayNumberText;

  return <div className={styles.day}>{dayOfMonth}</div>;
};
