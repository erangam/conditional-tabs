import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Feldman from '../epubs/feldman/Feldman';
import Manza from '../epubs/manza/Manza';
import Ciccarelli from '../epubs/ciccarelli/Ciccarelli'

const MainRoute = props => {
	return (
		<HashRouter>
			<Switch>
				<Route path={'/'} exact component={Home} />
				<Route path={'/feldman'} component={Feldman} />
				<Route path={'/manza'} component={Manza} />
				<Route path={'/ciccarelli'} component={Ciccarelli} />
			</Switch>
		</HashRouter>
	);
};

export default MainRoute;
