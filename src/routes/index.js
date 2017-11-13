import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import PageOne from '../epubs/feldman/chapter-eight/PageOne';
import PageTwo from '../epubs/feldman/chapter-eight/PageTwo';

export default () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route
					path="/epub/feldman/chapter-eight/page-one"
					exact
					component={PageOne}
				/>
				<Route
					path="/epub/feldman/chapter-eight/page-two"
					exact
					component={PageTwo}
				/>
			</Switch>
		</BrowserRouter>
	);
};
