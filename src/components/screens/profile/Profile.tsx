import cn from 'classnames';
import { FC } from 'react';

import { useAppSelector } from '@/hooks/hooks';
import { useUser } from '@/hooks/useUserInfo';

import { workoutsSelector } from '@/store/selectors';

import styles from './Profile.module.scss';

import { getFormattedDate } from '@/utils/helpers/getFormattedDate';
import { isPastDate } from '@/utils/helpers/isFutureDate';

const Profile: FC = () => {
	const workouts = useAppSelector(workoutsSelector);
	const { email, firstName, lastName } = useUser();

	return (
		<div className={styles.profile}>
			<div className={styles.user}>
				<p className={styles.title}>Detailed user information:</p>
				<p className={styles.userInfo}>{`First name : ${firstName}`}</p>
				<p className={styles.userInfo}>{`Last name : ${lastName}`}</p>
				<p className={styles.userInfo}>{`User email : ${email}`}</p>
			</div>
			<div className={styles.statistics}>
				<p className={styles.title}>Statistics</p>
				{workouts.map(workout => {
					const isCompletedWorkout = workout.exercises.every(
						exercise => exercise.isCompleted
					);

					const isRejectedWorkout = isPastDate(workout.date);

					return (
						<div
							key={workout.id}
							className={cn(
								styles.workout,
								isRejectedWorkout && styles.workout__rejected,
								isCompletedWorkout && styles.workout__success
							)}
						>
							<p className={styles.workoutTitle}>{workout.title}</p>
							<div className={styles.exercises}>
								{workout.exercises.map(exercise => (
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
									</div>
								))}
							</div>
							<p className={styles.date}>
								{getFormattedDate(new Date(workout.date))}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Profile;
