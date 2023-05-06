import { FC } from 'react';
import Router from 'routes/Router';

import Layout from './components/layout/Layout';

const App: FC = () => {
	return (
		<Layout>
			<Router />
		</Layout>
	);
};

export default App;
