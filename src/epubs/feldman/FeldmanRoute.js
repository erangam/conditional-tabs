import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { click } from '../helpers/navControlHelpers';
import NavControls from '../NavControls';

import References from './References';
import Page_1 from './chapter-eight/Page_1';
import Page_2 from './chapter-eight/Page_2';
import Page_3 from './chapter-eight/Page_3';
import Page_4 from './chapter-eight/Page_4';
import Page_5 from './chapter-eight/Page_5';
import Page_6 from './chapter-eight/Page_6';
import Page_7 from './chapter-eight/Page_7';
import Page_8 from './chapter-eight/Page_8';
import Page_9 from './chapter-eight/Page_9';
import Page_10 from './chapter-eight/Page_10';
import Page_11 from './chapter-eight/Page_11';
import Page_12 from './chapter-eight/Page_12';
import Page_13 from './chapter-eight/Page_13';
import Page_14 from './chapter-eight/Page_14';
import Page_15 from './chapter-eight/Page_15';
import Page_16 from './chapter-eight/Page_16';
import Page_17 from './chapter-eight/Page_17';
import Page_18 from './chapter-eight/Page_18';
import Page_19 from './chapter-eight/Page_19';
import Page_20 from './chapter-eight/Page_20';
import Page_21 from './chapter-eight/Page_21';
import Page_22 from './chapter-eight/Page_22';
import Page_23 from './chapter-eight/Page_23';
import Page_24 from './chapter-eight/Page_24';

import '../../assets/css/epub.css';
import '../../../node_modules/animate.css';

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
	},
	{
		path: '/chapter-eight/8',
		component: Page_8
	},
	{
		path: '/chapter-eight/9',
		component: Page_9
	},
	{
		path: '/chapter-eight/10',
		component: Page_10
	},
	{
		path: '/chapter-eight/11',
		component: Page_11
	},
	{
		path: '/chapter-eight/12',
		component: Page_12
	},
	{
		path: '/chapter-eight/13',
		component: Page_13
	},
	{
		path: '/chapter-eight/14',
		component: Page_14
	},
	{
		path: '/chapter-eight/15',
		component: Page_15
	},
	{
		path: '/chapter-eight/16',
		component: Page_16
	},
	{
		path: '/chapter-eight/17',
		component: Page_17
	},
	{
		path: '/chapter-eight/18',
		component: Page_18
	},
	{
		path: '/chapter-eight/19',
		component: Page_19
	},
	{
		path: '/chapter-eight/20',
		component: Page_20
	},
	{
		path: '/chapter-eight/21',
		component: Page_21
	},
	{
		path: '/chapter-eight/22',
		component: Page_22
	},
	{
		path: '/chapter-eight/23',
		component: Page_23
	},
	{
		path: '/chapter-eight/24',
		component: Page_24
	}
];

const FeldmanRoutes = routes.map((route, i) => {
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
		<HashRouter basename={'/feldman'}>
			<div>
				<NavControls
					poop={true}
					currentPage={props.currentPage}
					nextPath={props.nextPath}
					prevPath={props.prevPath}
					pageUpdate={props.pageUpdate}
					numberOfPages={routes.length - 1}
					hash={props.hash}
					query={props.query}
				/>
				<Switch>{FeldmanRoutes}</Switch>
			</div>
		</HashRouter>
	);
};

export default FeldmanRoute;
