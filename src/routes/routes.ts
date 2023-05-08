import Home from '@/components/screens/home/Home';
import Notifications from '@/components/screens/notifications/Notifications';
import Profile from '@/components/screens/profile/Profile';
import SignIn from '@/components/screens/signIn/SignIn';
import SignUp from '@/components/screens/signUp/SignUp';
import Welcome from '@/components/screens/welcome/Welcome';

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
	}
];
