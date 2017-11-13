import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Feldman from '../epubs/feldman/Feldman';

const MainRoute = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/feldman" component={Feldman} />
			</Switch>
		</BrowserRouter>
	);
};

export default MainRoute;
