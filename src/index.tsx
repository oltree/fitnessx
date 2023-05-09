import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Layout from './components/layout/Layout';

import { store } from './store/store';

import { RoutePaths } from './types/route.type';

import './assets/styles/index.scss';

import Router from './routes/Router';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<StrictMode>
		<BrowserRouter basename={RoutePaths.BASENAME}>
			<Provider store={store}>
				<Layout>
					<Router />
				</Layout>
			</Provider>
		</BrowserRouter>
	</StrictMode>
);
