import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import NavControls from '../epubs/feldman/NavControls';

import Page_1 from '../epubs/feldman/chapter-eight/Page_1';
import Page_2 from '../epubs/feldman/chapter-eight/Page_2';
import Page_3 from '../epubs/feldman/chapter-eight/Page_3';

const routes = [
	{
		path: '/chapter-eight/1',
		component: Page_1
	},
	{
		path: '/chapter-eight/2',
		component: Page_2
	},
	{
		path: '/chapter-eight/3',
		component: Page_3
	},
	{
		path: '/chapter-eight/4',
		component: Page_1
	}
];

const FeldmanRoutes = routes.map((route, i) => {
	return <Route key={i} path={route.path} render={route.component} />;
});

const YourEpubRoutes = props => {
	return (
		<HashRouter basename={'/myBook'}>
			<div>
				<NavControls
					basePath={props.match}
					currentPath={props.currentPath}
					numberOfPages={routes.length}
					hash={props.hash}
					query={props.query}
				/>
				<Switch>{FeldmanRoutes}</Switch>
			</div>
		</HashRouter>
	);
};

export default YourEpubRoutes;
