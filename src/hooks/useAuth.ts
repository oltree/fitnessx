import { authSelector } from '@/store/selectors';

import { useAppSelector } from './hooks';

export const useAuth = () => {
  const { isAuth } = useAppSelector(authSelector);

  return isAuth;
};
