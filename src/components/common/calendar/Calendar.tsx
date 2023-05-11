import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/hooks/hooks';

import { workoutsSelector } from '@/store/selectors';
import { getCurrentWorkout } from '@/store/slices/current-workout.slice';

import { RoutePaths } from '@/types/route.type';

import styles from './Calendar.module.scss';

import { MONDAY } from '@/utils/constants/days';

const Calendar = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const workouts = useAppSelector(workoutsSelector);

	const handleEventClick = (checkInfo: any) => {
		const foundWorkout = workouts.find(
			workout => workout.id === checkInfo.event.id
		);

		if (foundWorkout) {
			dispatch(getCurrentWorkout(foundWorkout));
			navigate(RoutePaths.WORKOUT);
		}
	};

	const renderEventContent = (eventInfo: any) => {
		return (
			<div className={styles.workout}>
				<p className={styles.title}>{eventInfo.event.title}</p>
			</div>
		);
	};

	return (
		<div className={styles.calendar}>
			<FullCalendar
				themeSystem='bootstrap5'
				plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
				headerToolbar={{
					left: 'prev today next',
					right: 'title'
				}}
				initialView='dayGridMonth'
				editable={true}
				selectable={true}
				selectMirror={true}
				dayMaxEvents={true}
				eventContent={renderEventContent}
				eventClick={handleEventClick}
				events={workouts}
				height='100%'
				firstDay={MONDAY}
			/>
		</div>
	);
};

export default Calendar;
