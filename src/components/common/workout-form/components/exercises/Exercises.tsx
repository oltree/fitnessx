import { FC, memo } from 'react';

import RemoveButton from '@/components/common/buttons/remove-button/RemoveButton';

import { useAppDispatch } from '@/hooks/hooks';

import { removeExercise } from '@/store/slices/exercises.slice';

import { ExerciseType } from '@/types/exercise.type';

import styles from './Exercises.module.scss';

interface ExercisesProps {
  exercises: ExerciseType[];
}

const Exercises: FC<ExercisesProps> = ({ exercises }) => {
  const dispatch = useAppDispatch();
  const handleDeleteExercise = (id: string) => dispatch(removeExercise(id));

  return (
    <div className={styles.exercises}>
      {exercises.map(exercise => (
        <div key={exercise.id} className={styles.exercise}>
          <div className={styles.exerciseName}>
            <p>{exercise.name}</p>
            <img src={exercise.icon} alt={exercise.name} />
          </div>

          <div className={styles.exerciseDetails}>
            <p className={styles.exerciseDetail}>{`Sets : ${exercise.sets}`}</p>
            <p
              className={styles.exerciseDetail}
            >{`Repetitions : ${exercise.sets}`}</p>
            <p
              className={styles.exerciseDetail}
            >{`Lead time : ${exercise.sets}`}</p>
            <p
              className={styles.exerciseDetail}
            >{`Work weight : ${exercise.sets}`}</p>
          </div>

          <RemoveButton onClick={() => handleDeleteExercise(exercise.id)} />
        </div>
      ))}
    </div>
  );
};

export default memo(Exercises);
