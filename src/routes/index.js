import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Feldman from '../epubs/feldman/Feldman';
const baseUrl = process.env.PUBLIC_URL;

const MainRoute = props => {
	return (
		<HashRouter>
			<Switch>
				<Route path={'/'} exact component={Home} />
				<Route path={'/feldman'} component={Feldman} />
			</Switch>
		</HashRouter>
	);
};

export default MainRoute;
