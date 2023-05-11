import { FC, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';

import WeatherService from '@/services/weather.service';

import { useAppDispatch, useAppSelector } from '@/hooks/hooks';

import { exercisesSelector } from '@/store/selectors';
import {
	removeAllExercise,
	removeExercise
} from '@/store/slices/exercises.slice';
import { addNotification } from '@/store/slices/notifications.slice';
import { addWorkout } from '@/store/slices/workouts.slice';

import { Workout } from '@/types/workout.type';

import styles from './WorkoutForm.module.scss';

import Button from '../buttons/button/Button';
import RemoveButton from '../buttons/remove-button/RemoveButton';
import ExerciseForm from '../exercise-form/ExerciseForm';
import Input from '../input/Input';

import { MONDAY } from '@/utils/constants/days';
import { getFormattedDate } from '@/utils/helpers/getFormattedDate';

interface WorkoutFormData extends Workout {}

const WorkoutForm: FC = () => {
	const dispatch = useAppDispatch();
	const [startDate, setStartDate] = useState(new Date());
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<WorkoutFormData>({ mode: 'onChange' });

	const exercises = useAppSelector(exercisesSelector);
	const isExercises = !!exercises.length;
	const isRunningWorkout = exercises.some(exercise => exercise.name === 'legs');

	const handleCreateWorkout = (data: WorkoutFormData) => {
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
	};
	const handleDeleteExercise = (id: string) => dispatch(removeExercise(id));
	const handleDateChange = (date: Date) => setStartDate(date);

	useEffect(() => {
		if (isRunningWorkout) {
			const weatherService = new WeatherService();
			const fetchWeatherMessage = async () => {
				const message = await weatherService.getWeatherMessage('Minsk', 'legs');
				const newNotification = {
					id: uuid(),
					message,
					date: getFormattedDate(),
					isCompleted: false
				};
				dispatch(addNotification(newNotification));
			};
			fetchWeatherMessage();
		}
	}, [isRunningWorkout, dispatch]);

	return (
		<div className={styles.workoutForm}>
			<form
				onSubmit={handleSubmit(handleCreateWorkout)}
				className={styles.form}
			>
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

			<div className={styles.datepicker}>
				<p className={styles.title}>Time</p>
				<DatePicker
					withPortal
					dateFormat='dd-MM-yyyy'
					selected={startDate}
					onChange={handleDateChange}
					calendarStartDay={MONDAY}
					className={styles.datepickerInput}
				/>
			</div>

			<ExerciseForm />

			{isExercises && (
				<div className={styles.exercises}>
					{exercises.map(exercise => (
						<div key={exercise.id} className={styles.exercise}>
							<div className={styles.exerciseName}>
								<p>{exercise.name}</p>
								<img src={exercise.icon} alt={exercise.name} />
							</div>

							<div className={styles.exerciseDetails}>
								<p
									className={styles.exerciseDetail}
								>{`Sets : ${exercise.sets}`}</p>
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
			)}
		</div>
	);
};

export default WorkoutForm;
