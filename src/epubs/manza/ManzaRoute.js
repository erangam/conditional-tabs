import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { click } from '../helpers/navControlHelpers';
import NavControls from '../NavControls';

import Page_2 from './chapter-six/Page_2';
import Page_3 from './chapter-six/Page_3';
import Page_4 from './chapter-six/Page_4';
import Page_5 from './chapter-six/Page_5';
import Page_6 from './chapter-six/Page_6';

import '../../assets/css/epub.css';
import '../../../node_modules/animate.css';

import References from '../manza/References';

const routes = [
	{
		path: '/glossary',
		component: References
	},
	{
		path: '/reference',
		component: References
	},
	{
		path: '/chapter-six/1',
		component: Page_2
	},
	{
		path: '/chapter-six/2',
		component: Page_3
	},
	{
		path: '/chapter-six/3',
		component: Page_4
	},
	{
		path: '/chapter-six/4',
		component: Page_5
	},
	{
		path: '/chapter-six/5',
		component: Page_6
	},
	{
		path: '/chapter-six/6',
		component: References
	}
];

const ManzaRoutes = routes.map((route, i) => {
	return (
		<Route
			key={i}
			path={route.path}
			render={props => <route.component {...props} onClick={click(props)} />}
		/>
	);
});

const FeldmanRoute = props => {
	return (
		<HashRouter basename={'/manza'}>
			<div>
				<NavControls
					subPath={props.subPath}
					currentPage={props.currentPage}
					nextPath={props.nextPath}
					prevPath={props.prevPath}
					pageUpdate={props.pageUpdate}
					numberOfPages={routes.length - 1}
					hash={props.hash}
					query={props.query}
				/>
				<Switch>{ManzaRoutes}</Switch>
			</div>
		</HashRouter>
	);
};

export default FeldmanRoute;
