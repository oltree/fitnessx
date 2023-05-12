import cn from 'classnames';
import { ChangeEvent, FC, memo } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { v4 as uuid } from 'uuid';

import { useAppDispatch } from '@/hooks/hooks';

import { addNotification } from '@/store/slices/notifications.slice';

import { EXERCISES } from '@/types/enams/exercises.enam';

import styles from './RadioGroup.module.scss';

import { exercisesNames } from '@/utils/constants/exercises';
import { getFormattedDate } from '@/utils/helpers/getFormattedDate';
import { getWeatherMessage } from '@/utils/helpers/getWeatherMessage';

interface RadioGroupProps {
  startDate: Date;
  register: UseFormRegisterReturn<string>;
  className?: string;
}

const RadioGroup: FC<RadioGroupProps> = ({
  startDate,
  register,
  className
}) => {
  const dispatch = useAppDispatch();

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { name } = JSON.parse(event.target.value);

    const weatherMessage = await getWeatherMessage();
    const newNotification = {
      id: uuid(),
      message: weatherMessage,
      date: getFormattedDate(startDate),
      isCompleted: false
    };

    if (name === EXERCISES.LEGS) {
      dispatch(addNotification(newNotification));
    }
  };

  return (
    <fieldset id='exercise' className={cn(styles.radioGroup, className)}>
      {exercisesNames.map(exercise => (
        <div key={exercise.name}>
          <input
            id={exercise.name}
            type='radio'
            {...register}
            value={JSON.stringify(exercise)}
            onChange={handleChange}
          />
          <label htmlFor={exercise.name}>
            <img src={exercise.icon} alt={exercise.name} />
          </label>
        </div>
      ))}
    </fieldset>
  );
};

export default memo(RadioGroup);
