import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import NavControls from './NavControls';

import Page_1 from './chapter-eight/Page_1';
import Page_2 from './chapter-eight/Page_2';
import Page_3 from './chapter-eight/Page_3';
import Page_4 from './chapter-eight/Page_4';
import Page_5 from './chapter-eight/Page_5';
import Page_6 from './chapter-eight/Page_6';
import Page_7 from './chapter-eight/Page_7';

import '../../assets/css/epub.css';
import '../../../node_modules/animate.css';

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
		component: Page_4
	},
	{
		path: '/chapter-eight/5',
		component: Page_5
	},
	{
		path: '/chapter-eight/6',
		component: Page_6
	},
	{
		path: '/chapter-eight/7',
		component: Page_7
	}
];

const FeldmanRoutes = routes.map((route, i) => {
	return <Route key={i} path={route.path} render={route.component} />;
});

const FeldmanRoute = props => {
	return (
		<HashRouter basename={'/feldman'}>
			<div className="animated fadeIn">
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

const Feldman = props => {
	return (
		<div className="revel">
			<div className="chapter">
				<FeldmanRoute
					match={props.match.path}
					currentPath={props.history.location.pathname}
					hash={props.location.hash}
					query={props.location.search}
				/>
			</div>
		</div>
	);
};

export default Feldman;
