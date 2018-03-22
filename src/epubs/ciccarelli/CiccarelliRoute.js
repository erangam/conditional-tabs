import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { click } from '../helpers/navControlHelpers';
import NavControls from '../NavControls';
import RevelHeader from '../RevelHeader';
import RevelFooter from '../RevelFooter';

import Page_1 from './chapter-four/Page_1';
import Page_2 from './chapter-four/Page_2';
import Page_3 from './chapter-four/Page_3';
import Page_4 from './chapter-four/Page_4';
import Page_5 from './chapter-four/Page_5';
import Page_6 from './chapter-four/Page_6';
import Page_7 from './chapter-four/Page_7';
import Page_8 from './chapter-four/Page_8';
import Page_9 from './chapter-four/Page_9';
import Page_10 from './chapter-four/Page_10';
import Page_11 from './chapter-four/Page_11';
import Page_12 from './chapter-four/Page_12';
import Page_13 from './chapter-four/Page_13';
import Page_14 from './chapter-four/Page_14';
import Page_15 from './chapter-four/Page_15';
import Page_16 from './chapter-four/Page_16';
import Page_17 from './chapter-four/Page_17';
import Page_18 from './chapter-four/Page_18';
import Page_19 from './chapter-four/Page_19';
import Page_20 from './chapter-four/Page_20';
import Page_21 from './chapter-four/Page_21';
import Page_22 from './chapter-four/Page_22';
import Page_23 from './chapter-four/Page_23';


import '../../assets/css/epub.css';
import '../../../node_modules/animate.css';

import References from '../ciccarelli/References';

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
		path: '/chapter-four/1',
		component: Page_1
	},
	{
		path: '/chapter-four/2',
		component: Page_2
	},
	{
		path: '/chapter-four/3',
		component: Page_3
	},
	{
		path: '/chapter-four/4',
		component: Page_4
	},
	{
		path: '/chapter-four/5',
		component: Page_5
	},
	{
		path: '/chapter-four/6',
		component: Page_6
	},
	{
		path: '/chapter-four/7',
		component: Page_7
	},
	{
		path: '/chapter-four/8',
		component: Page_8
	},
	{
		path: '/chapter-four/9',
		component: Page_9
	},
	{
		path: '/chapter-four/10',
		component: Page_10
	},
	{
		path: '/chapter-four/11',
		component: Page_11
	},
	{
		path: '/chapter-four/12',
		component: Page_12
	},
	{
		path: '/chapter-four/13',
		component: Page_13
	},
	{
		path: '/chapter-four/14',
		component: Page_14
	},
	{
		path: '/chapter-four/15',
		component: Page_15
	},
	{
		path: '/chapter-four/16',
		component: Page_16
	},
	{
		path: '/chapter-four/17',
		component: Page_17
	},
	{
		path: '/chapter-four/18',
		component: Page_18
	},
	{
		path: '/chapter-four/19',
		component: Page_19
	},
	{
		path: '/chapter-four/20',
		component: Page_20
	},
	{
		path: '/chapter-four/21',
		component: Page_21
	},
	{
		path: '/chapter-four/22',
		component: Page_22
	},
	{
		path: '/chapter-four/23',
		component: Page_23
	},
	{
		path: '/chapter-four/24',
		component: References
	},

];

const CiccarelliRoutes = routes.map((route, i) => {
	return (
		<Route
			key={i}
			path={route.path}
			render={props => <route.component {...props} onClick={click(props)} />}
		/>
	);
});

const CiccarelliRoute = props => {
	return (
		<HashRouter basename={'/ciccarelli'}>
			<div>
				<RevelHeader display={true}/>
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
				<Switch>{CiccarelliRoutes}</Switch>
				<RevelFooter display={true} totalPages={routes.length - 2} currentPage={props.currentPage} path={props.currentPath} history={props.history}/>
			</div>
		</HashRouter>
	);
};

export default CiccarelliRoute;
