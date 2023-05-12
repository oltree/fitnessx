import { FC, memo } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { DAYS } from '@/types/enams/days.enam';

import styles from './Datepicker.module.scss';

import { DATE_FORMAT } from '@/utils/constants/date-format';

interface DatepickerProps {
  startDate: Date;
  setStartDate: (date: Date) => void;
}

const Datepicker: FC<DatepickerProps> = ({ startDate, setStartDate }) => {
  const handleDateChange = (date: Date) => setStartDate(date);

  return (
    <div className={styles.datepicker}>
      <p className={styles.title}>Time</p>
      <DatePicker
        withPortal
        dateFormat={DATE_FORMAT}
        selected={startDate}
        onChange={handleDateChange}
        calendarStartDay={DAYS.MONDAY}
        className={styles.datepickerInput}
      />
    </div>
  );
};

export default memo(Datepicker);
