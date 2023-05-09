import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import Layout from './components/layout/Layout';

import { store } from './store/store';

import './assets/styles/index.scss';

import Router from './routes/Router';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<StrictMode>
		<HashRouter>
			<Provider store={store}>
				<Layout>
					<Router />
				</Layout>
			</Provider>
		</HashRouter>
	</StrictMode>
);
