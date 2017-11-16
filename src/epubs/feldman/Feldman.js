import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import NavControls from './NavControls';

import Page_1 from './chapter-eight/Page_1';
import Page_2 from './chapter-eight/Page_2';
import Page_3 from './chapter-eight/Page_3';

import '../../assets/css/epub.css';

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
	}
];

const FeldmanRoutes = routes.map((route, i) => {
	return <Route key={i} path={route.path} render={route.component} />;
});

const FeldmanRoute = props => {
	return (
		<HashRouter basename={'/feldman'}>
			<div>
				<NavControls
					basePath={props.match}
					currentPath={props.currentPath}
					numberOfPages={routes.length}
				/>
				<Switch>{FeldmanRoutes}</Switch>
			</div>
		</HashRouter>
	);
};

const Feldman = props => {
	return (
		<div className="revel">
			<div className="chapter">
				<FeldmanRoute
					match={props.match.path}
					currentPath={props.history.location.pathname}
				/>
			</div>
		</div>
	);
};

export default Feldman;
