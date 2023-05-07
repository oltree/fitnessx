import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';

import { Event } from '../../../types/event';

const Home = () => {
	const [events, setEvents] = useState<Event[]>([]);

	const handleDateSelect = (selectInfo: any) => {
		let title = prompt('Please enter a new title for your event');
		let calendarApi = selectInfo.view.calendar;

		calendarApi.unselect();

		if (title) {
			calendarApi.addEvent({
				id: v4(),
				title,
				start: selectInfo.startStr,
				end: selectInfo.endStr,
				allDay: selectInfo.allDay
			});
		}
	};

	const handleEventClick = (clickInfo: any) => {
		const confirmMethod = window.confirm || (() => true);

		if (
			confirmMethod(
				`Are you sure you want to delete the event '${clickInfo.event.title}'`
			)
		) {
			clickInfo.event.remove();
		}
	};

	function renderEventContent(eventInfo: any) {
		return (
			<>
				<b>{eventInfo.timeText}</b>
				<i>{eventInfo.event.title}</i>
			</>
		);
	}

	useEffect(() => {
		setEvents(events);
	}, [events]);

	return (
		<div style={{ height: '80vh' }}>
			<FullCalendar
				plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
				headerToolbar={{
					left: 'prev,next today',
					center: 'title',
					right: 'dayGridMonth,timeGridWeek'
				}}
				initialView='dayGridMonth'
				editable={true}
				selectable={true}
				selectMirror={true}
				dayMaxEvents={true}
				select={handleDateSelect}
				eventContent={renderEventContent}
				eventClick={handleEventClick}
				events={events}
				height='100%'
			/>
		</div>
	);
};

export default Home;
