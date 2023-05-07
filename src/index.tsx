import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Layout from './components/layout/Layout';

import { store } from './store/store';

import './assets/styles/index.scss';

import Router from './routes/Router';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<Layout>
					<Router />
				</Layout>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
