import {
	Home,
	Notifications,
	Profile,
	SignIn,
	SignUp,
	Welcome,
	Workout
} from '@/components/screens';

import { RoutePaths, RouteType } from '@/types/route.type';

export const routes: RouteType[] = [
	{
		path: RoutePaths.HOME,
		component: Home,
		isAuth: true
	},
	{
		path: RoutePaths.WELCOME,
		component: Welcome,
		isAuth: false
	},
	{
		path: RoutePaths.SIGN_UP,
		component: SignUp,
		isAuth: false
	},
	{
		path: RoutePaths.SIGN_IN,
		component: SignIn,
		isAuth: false
	},
	{
		path: RoutePaths.NOTIFICATIONS,
		component: Notifications,
		isAuth: true
	},
	{
		path: RoutePaths.PROFILE,
		component: Profile,
		isAuth: true
	},
	{
		path: RoutePaths.WORKOUT,
		component: Workout,
		isAuth: true
	}
];
