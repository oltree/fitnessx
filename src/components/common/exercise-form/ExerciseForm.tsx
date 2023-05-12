import { FC, memo, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';

import { useAppDispatch } from '@/hooks/hooks';

import { addExercise } from '@/store/slices/exercises.slice';

import { ExerciseType } from '@/types/exercise.type';

import styles from './ExerciseForm.module.scss';

import Button from '../buttons/button/Button';
import RadioGroup from '../radio-group/RadioGroup';

import ExerciseDetails from './exrcise-details/ExerciseDetails';

export interface ExerciseFormData extends Omit<ExerciseType, 'name' | 'icon'> {
  exercise: string;
}

const ExerciseForm: FC = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ExerciseFormData>({ mode: 'onChange' });

  const handleCreateExercise = useCallback(
    (data: ExerciseFormData) => {
      const { exercise, sets, reps, time, weight } = data;
      const { name, icon } = JSON.parse(exercise);
      const newExercise = {
        id: uuid(),
        name,
        sets,
        reps,
        time,
        weight,
        icon,
        isCompleted: false
      };

      dispatch(addExercise(newExercise));

      reset();
    },
    [dispatch, reset]
  );

  return (
    <form onSubmit={handleSubmit(handleCreateExercise)} className={styles.form}>
      <p className={styles.title}>Exersises</p>

      <RadioGroup register={register('exercise', { required: true })} />

      <ExerciseDetails register={register} errors={errors} />

      <Button className={styles.button}>Add exercise</Button>
    </form>
  );
};

export default memo(ExerciseForm);
