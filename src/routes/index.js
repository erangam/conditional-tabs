import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Feldman from '../epubs/feldman/Feldman';
const baseUrl = process.env.PUBLIC_URL;

const MainRoute = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path={baseUrl + '/'} exact component={Home} />
				<Route path={baseUrl + '/feldman'} component={Feldman} />
			</Switch>
		</BrowserRouter>
	);
};

export default MainRoute;
