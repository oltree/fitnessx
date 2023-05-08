import { Route, Routes } from 'react-router-dom';

import NotFound from '@/components/screens/not-found/NotFound';

import { useAppSelector } from '@/hooks/hooks';

import { authSelector } from '@/store/selectors/authSelector';

import { RoutePaths } from '@/types/routePaths';

import { routes } from './routes';

const Router = () => {
	const { isAuth } = useAppSelector(authSelector);

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
