import { notificationsSelector } from '@/store/selectors';

import { useAppSelector } from './hooks';

export const useNotifications = () => {
  const notifications = useAppSelector(notificationsSelector);

  return notifications;
};
