import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import PageOne from './chapter-eight/PageOne';
import PageTwo from './chapter-eight/PageTwo';

import '../../assets/css/epub.css';
import NavControls from './NavControls';

const baseUrl = process.env.PUBLIC_URL,
	routes = [
		{
			path: baseUrl + '/chapter-eight/1',
			component: PageOne
		},
		{
			path: baseUrl + '/chapter-eight/2',
			component: PageTwo
		}
	];

const FeldmanRoutes = routes.map((route, i) => {
	return <Route key={i} path={route.path} render={route.component} />;
});

const FeldmanRoute = props => {
	console.log(props);
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