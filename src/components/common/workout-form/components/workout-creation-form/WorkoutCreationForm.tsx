import { FC, memo, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';

import Button from '@/components/common/buttons/button/Button';
import Input from '@/components/common/input/Input';

import { useAppDispatch } from '@/hooks/hooks';

import { removeAllExercise } from '@/store/slices/exercises.slice';
import { addWorkout } from '@/store/slices/workouts.slice';

import { ExerciseType } from '@/types/exercise.type';
import { Workout } from '@/types/workout.type';

import styles from './WorkoutCreationForm.module.scss';

interface FormProps {
  startDate: Date;
  exercises: ExerciseType[];
}

const WorkoutCreationForm: FC<FormProps> = ({ startDate, exercises }) => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Workout>({ mode: 'onChange' });

  const handleCreateWorkout = useCallback(
    (data: Workout) => {
      const { title } = data;
      const newWorkout: Workout = {
        id: uuid(),
        date: startDate,
        title,
        exercises
      };

      dispatch(addWorkout(newWorkout));
      dispatch(removeAllExercise());

      reset();
    },
    [dispatch, exercises, reset, startDate]
  );

  return (
    <form onSubmit={handleSubmit(handleCreateWorkout)} className={styles.form}>
      <div className={styles.buttonContainer}>
        <p className={styles.title}>Details Workout</p>
        <Button className={styles.button}>Create</Button>
      </div>

      <Input
        type='text'
        register={register('title', {
          required: 'Workout name is required!'
        })}
        error={errors.title?.message}
        placeholder='Workout name'
        className={styles.input}
      />
    </form>
  );
};

export default memo(WorkoutCreationForm);
