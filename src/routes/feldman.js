import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PageOne from '../epubs/feldman/chapter-eight/PageOne';
import PageTwo from '../epubs/feldman/chapter-eight/PageTwo';

const FeldmanRoute = props => {
	return (
		<BrowserRouter basename="/feldman">
			<Switch>
				<Route
					name="one"
					path="/chapter-eight/one"
					exact
					render={() => <PageOne />}
				/>
				<Route
					name="two"
					path="/chapter-eight/two"
					exact
					render={() => <PageTwo />}
				/>
			</Switch>
		</BrowserRouter>
	);
};

export default FeldmanRoute;
