import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PageOne from '../epubs/feldman/chapter-eight/PageOne';
import PageTwo from '../epubs/feldman/chapter-eight/PageTwo';
const baseUrl = process.env.PUBLIC_URL;

const FeldmanRoute = props => {
	return (
		<BrowserRouter basename="/feldman">
			<Switch>
				<Route
					name="one"
					path={baseUrl + '/chapter-eight/one'}
					exact
					render={() => <PageOne path={props.match} />}
				/>
				<Route
					name="two"
					path={baseUrl + '/chapter-eight/two'}
					exact
					render={() => <PageTwo path={props.match} />}
				/>
			</Switch>
		</BrowserRouter>
	);
};

export default FeldmanRoute;
