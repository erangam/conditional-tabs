import React from 'react';
import FeldmanRoute from '../../routes/feldman';

import '../../assets/css/epub.css';
import NavControls from './NavControls';

const Feldman = props => {
	console.log(props);
	return (
		<div className="revel">
			<div className="chapter">
				<NavControls history={props.history.location.pathname} />
				<section className="bodymatter">
					<FeldmanRoute />
				</section>
			</div>
		</div>
	);
};

export default Feldman;
