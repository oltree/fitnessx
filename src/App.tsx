import { FC } from 'react';

import Layout from './components/layout/Layout';

import Router from '@/routes/Router';

const App: FC = () => {
	return (
		<Layout>
			<Router />
		</Layout>
	);
};

export default App;
