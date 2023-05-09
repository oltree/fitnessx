import { FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';

import styles from './Workout.module.scss';

import Button from '../button/Button';
import Input from '../input/Input';

const ExerciseForm: FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm({ mode: 'onChange' });

	const handleCreateWorkout = (data: any) => {
		const { name } = data;
		const newWorkout = { name };

		reset();
	};

	return (
		<div className={styles.workoutForm}>
			<form
				onSubmit={handleSubmit(handleCreateWorkout)}
				className={styles.form}
			>
				<div className={styles.workoutContainer}>
					<p className={styles.title}>Details Workout:</p>
					<Input
						type='text'
						register={register('name', {
							required: 'Workout name is required!'
						})}
						placeholder='Workout name'
						className={styles.input}
					/>
				</div>

				<div className={styles.buttonConatiner}>
					<Button className={styles.button}>Create Workout</Button>
				</div>
			</form>
		</div>
	);
};

export default ExerciseForm;
