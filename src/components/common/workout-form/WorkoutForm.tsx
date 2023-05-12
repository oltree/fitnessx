import { FC, memo, useState } from 'react';

import Datepicker from './components/datepicker/Datepicker';
import Exercises from './components/exercises/Exercises';
import WorkoutCreationForm from './components/workout-creation-form/WorkoutCreationForm';

import { useAddNotification } from '@/hooks/useAddNotification';
import { useExercises } from '@/hooks/useExercises';

import styles from './WorkoutForm.module.scss';

import ExerciseForm from '../exercise-form/ExerciseForm';

const WorkoutForm: FC = () => {
  const [startDate, setStartDate] = useState(new Date());

  const exercises = useExercises();
  const isExercises = exercises.length > 0;

  useAddNotification(exercises);

  return (
    <div className={styles.workoutForm}>
      <WorkoutCreationForm startDate={startDate} exercises={exercises} />

      <Datepicker startDate={startDate} setStartDate={setStartDate} />

      <ExerciseForm />

      {isExercises && <Exercises exercises={exercises} />}
    </div>
  );
};

export default memo(WorkoutForm);
