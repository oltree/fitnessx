import { authSelector } from '@/store/selectors';

import { useAppSelector } from './hooks';

export const useUser = () => {
  const { email, firstName, lastName } = useAppSelector(authSelector);

  return { email, firstName, lastName };
};
