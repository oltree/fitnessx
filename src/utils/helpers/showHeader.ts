import { RoutePaths } from '@/types/routePaths';

export const showHeader = (pathname: string, isAuth: boolean) => {
	const allowedRoutes = [
		RoutePaths.HOME,
		RoutePaths.PROFILE,
		RoutePaths.NOTIFICATIONS
	];
	return isAuth && allowedRoutes.includes(pathname as RoutePaths);
};
