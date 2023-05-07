import { Route, Routes } from 'react-router-dom';

import Home from '@/components/screens/home/Home';
import Notifications from '@/components/screens/notifications/Notifications';
import Profile from '@/components/screens/profile/Profile';
import SignIn from '@/components/screens/signIn/SignIn';
import SignUp from '@/components/screens/signUp/SignUp';
import Welcome from '@/components/screens/welcome/Welcome';

import { RoutePaths } from '../types/routes';

const Router = () => {
	return (
		<Routes>
			<Route path={RoutePaths.WELCOME} element={<Welcome />} />
			<Route path={RoutePaths.SIGN_UP} element={<SignUp />} />
			<Route path={RoutePaths.SIGN_IN} element={<SignIn />} />
			<Route path={RoutePaths.HOME} element={<Home />} />
			<Route path={RoutePaths.NOTIFICATIONS} element={<Notifications />} />
			<Route path={RoutePaths.PROFILE} element={<Profile />} />
		</Routes>
	);
};

export default Router;
