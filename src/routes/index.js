import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Epub from '../components/Epub';

export default () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/epub" exact component={Epub} />
			</Switch>
		</BrowserRouter>
	);
};
