import { FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';

import { useAppDispatch, useAppSelector } from '@/hooks/hooks';

import { exercisesSelector } from '@/store/selectors';
import { addWorkout } from '@/store/slices/workoutsSlice';

import { Workout } from '@/types/workout.type';

import styles from './WorkoutForm.module.scss';

import Button from '../button/Button';
import Input from '../input/Input';

const WorkoutForm: FC = () => {
	const dispatch = useAppDispatch();
	const exercises = useAppSelector(exercisesSelector);
	const [startDate, setStartDate] = useState(new Date());
	const { register, handleSubmit, reset } = useForm({ mode: 'onChange' });

	const handleCreateWorkout = (data: any) => {
		const { name } = data;
		const newWorkout: Workout = {
			id: uuid(),
			date: startDate,
			name,
			exercises
		};
		dispatch(addWorkout(newWorkout));

		reset();
	};

	return (
		<div className={styles.workoutForm}>
			<form
				onSubmit={handleSubmit(handleCreateWorkout)}
				className={styles.form}
			>
				<div className={styles.timeContainer}>
					<p className={styles.title}>Time:</p>
					<DatePicker
						withPortal
						dateFormat='dd-MM-yyyy'
						selected={startDate}
						onChange={(date: Date) => setStartDate(date)}
						className={styles.datepickerInput}
					/>
				</div>

				<div className={styles.workoutContainer}>
					<p className={styles.title}>Details Workout:</p>
					<Input
						type='text'
						register={register('name')}
						placeholder='Workout name'
						className={styles.input}
					/>
				</div>

				<div>add exercises</div>

				<div className={styles.buttonConatiner}>
					<Button className={styles.button}>Create Workout</Button>
				</div>
			</form>
		</div>
	);
};

export default WorkoutForm;
