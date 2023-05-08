import { authSelector } from '@/store/selectors/authSelector';

import { useAppSelector } from './hooks';

export const useAuth = () => {
	const { isAuth } = useAppSelector(authSelector);

	return isAuth;
};
