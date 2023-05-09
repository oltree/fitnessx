import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import Layout from './components/layout/Layout';

import { store } from './store/store';

import './assets/styles/index.scss';

import Router from './routes/Router';

const container = document.getElementById('root')!;
const root = createRoot(container);
const persistor = persistStore(store);

root.render(
	<StrictMode>
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Layout>
						<Router />
					</Layout>
				</PersistGate>
			</Provider>
		</BrowserRouter>
	</StrictMode>
);
