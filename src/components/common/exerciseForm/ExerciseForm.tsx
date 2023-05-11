import { FC, memo } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';

import { useAppDispatch } from '@/hooks/hooks';

import { addExercise } from '@/store/slices/exercises.slice';

import { ExerciseType } from '@/types/exercise.type';

import styles from './ExerciseForm.module.scss';

import Button from '../button/Button';
import Input from '../input/Input';
import RadioGroup from '../radioGroup/RadioGroup';

interface ExerciseFormData extends Omit<ExerciseType, 'name' | 'icon'> {
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

	const handleCreateExercise = (data: ExerciseFormData) => {
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
	};

	return (
		<form
			id='workout'
			onSubmit={handleSubmit(handleCreateExercise)}
			className={styles.form}
		>
			<p className={styles.title}>Exersises</p>

			<RadioGroup register={register('exercise', { required: true })} />

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

			<Button className={styles.button}>Add exercise</Button>
		</form>
	);
};

export default memo(ExerciseForm);
