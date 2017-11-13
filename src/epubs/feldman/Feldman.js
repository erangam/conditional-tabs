import React from 'react';
import FeldmanRoute from '../../routes/feldman';

import '../../assets/css/epub.css';
import NavControls from './NavControls';

const Feldman = props => {
	return (
		<div className="revel">
			<div className="chapter">
				<NavControls />
				<section className="bodymatter">
					<FeldmanRoute />
				</section>
			</div>
		</div>
	);
};

export default Feldman;
