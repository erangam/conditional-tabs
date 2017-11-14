import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PageOne from './chapter-eight/PageOne';
import PageTwo from './chapter-eight/PageTwo';

import '../../assets/css/epub.css';
import NavControls from './NavControls';

const baseUrl = process.env.PUBLIC_URL,
	routes = [
		{
			path: '/chapter-eight/1',
			component: PageOne
		},
		{
			path: '/chapter-eight/2',
			component: PageTwo
		},
		{
			path: '/chapter-eight/3',
			component: PageOne
		},
		{
			path: '/chapter-eight/4',
			component: PageTwo
		}
	];

const FeldmanRoutes = routes.map((route, i) => {
	return <Route key={i} path={route.path} render={route.component} />;
});

const FeldmanRoute = props => {
	return (
		<BrowserRouter basename={baseUrl + '/feldman'}>
			<div>
				<NavControls
					basePath={props.match}
					currentPath={props.currentPath}
					numberOfPages={routes.length}
				/>
				<Switch>{FeldmanRoutes}</Switch>
			</div>
		</BrowserRouter>
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
