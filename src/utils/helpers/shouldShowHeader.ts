import { RoutePaths } from '@/types/route.type';

export const shouldShowHeader = (pathname: string, isAuth: boolean) => {
  const allowedRoutes = [
    RoutePaths.HOME,
    RoutePaths.PROFILE,
    RoutePaths.NOTIFICATIONS,
    RoutePaths.WORKOUT
  ];
  return isAuth && allowedRoutes.includes(pathname as RoutePaths);
};
