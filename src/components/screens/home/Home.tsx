import { FC } from 'react';

import Banner from '@/components/common/banner/Banner';
import Calendar from '@/components/common/calendar/Calendar';
import WorkoutForm from '@/components/common/workoutForm/WorkoutForm';

import styles from './Home.module.scss';

const Home: FC = () => {
	return (
		<div className={styles.home}>
			<div>
				<Banner />
				<WorkoutForm />
			</div>
			<Calendar />
		</div>
	);
};

export default Home;
