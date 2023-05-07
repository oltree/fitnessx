import { Route, Routes, useNavigate } from 'react-router-dom';

import NotFound from '@/components/screens/not-found/NotFound';
import SignIn from '@/components/screens/signIn/SignIn';

import { useAuth } from '@/hooks/useAuth';

import { RoutePaths } from '@/types/routePaths';

import { routes } from './routes';

const Router = () => {
	const navigate = useNavigate();
	const { isAuth } = useAuth();

	return (
		<Routes>
			{routes.map(route => {
				if (route.isAuth && !isAuth) {
					return false;
				}

				return (
					<Route
						key={route.path}
						path={route.path}
						element={<route.component />}
					/>
				);
			})}
			<Route path={RoutePaths.NOTFOUND} element={<NotFound />} />
		</Routes>
	);
};

export default Router;
