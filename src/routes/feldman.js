import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PageOne from '../epubs/feldman/chapter-eight/PageOne';
import PageTwo from '../epubs/feldman/chapter-eight/PageTwo';

const FeldmanRoute = () => {
	return (
		<BrowserRouter basename="/feldman">
			<Switch>
				<Route path="/chapter-eight/page-one" exact component={PageOne} />
				<Route path="/chapter-eight/page-two" exact component={PageTwo} />
			</Switch>
		</BrowserRouter>
	);
};

export default FeldmanRoute;
