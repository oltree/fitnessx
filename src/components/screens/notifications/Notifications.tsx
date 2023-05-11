import cn from 'classnames';
import { FC } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/hooks';

import { notificationsSelector } from '@/store/selectors';
import { updateNotification } from '@/store/slices/notifications.slice';

import { NotificationType } from '@/types/notification.type';

import styles from './Notifications.module.scss';

const Notifications: FC = () => {
	const dispatch = useAppDispatch();
	const notifications = useAppSelector(notificationsSelector);

	const handleClick = (notice: NotificationType) => {
		const updatedNotice: NotificationType = {
			...notice,
			isCompleted: true
		};

		dispatch(updateNotification(updatedNotice));
	};

	return (
		<div className={styles.notifications}>
			{notifications.map(notice => (
				<div
					key={notice.id}
					onClick={() => handleClick(notice)}
					className={cn(
						styles.notice,
						notice.isCompleted && styles.notice__success
					)}
				>
					<p>{notice.message}</p>
					<p>{notice.date}</p>
				</div>
			))}
		</div>
	);
};

export default Notifications;
