import { FC, memo } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import styles from './ExerciseDetails.module.scss';

import Input from '../../input/Input';
import { ExerciseFormData } from '../ExerciseForm';

interface ExerciseDetailsProps {
  register: UseFormRegister<ExerciseFormData>;
  errors: FieldErrors<ExerciseFormData>;
}

const ExerciseDetails: FC<ExerciseDetailsProps> = ({ register, errors }) => {
  return (
    <div className={styles.details}>
      <div className={styles.detail}>
        <p className={styles.name}>Sets:</p>
        <Input
          type='text'
          register={register('sets', {
            required: 'Sets is required!'
          })}
          error={errors.sets?.message}
          placeholder='0'
          className={styles.input}
        />
      </div>

      <div className={styles.detail}>
        <p className={styles.name}>Repetitions:</p>
        <Input
          type='text'
          register={register('reps', {
            required: 'Repetitions is required!'
          })}
          error={errors.reps?.message}
          placeholder='0'
          className={styles.input}
        />
      </div>

      <div className={styles.detail}>
        <p className={styles.name}>Lead time:</p>
        <Input
          type='text'
          register={register('time', {
            required: 'Lead time is required!'
          })}
          error={errors.time?.message}
          placeholder='0'
          className={styles.input}
        />
      </div>

      <div className={styles.detail}>
        <p className={styles.name}>Work weight:</p>
        <Input
          type='text'
          register={register('weight', {
            required: 'Work weight is required!'
          })}
          error={errors.weight?.message}
          placeholder='0'
          className={styles.input}
        />
      </div>
    </div>
  );
};

export default memo(ExerciseDetails);
