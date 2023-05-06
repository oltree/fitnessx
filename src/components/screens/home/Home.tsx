import moment from 'moment';
import { FC } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const Home: FC = () => {
	return (
		<div>
			<Calendar
				localizer={localizer}
				events={[]}
				startAccessor='start'
				endAccessor='end'
				style={{ height: 800 }}
			/>
		</div>
	);
};

export default Home;
