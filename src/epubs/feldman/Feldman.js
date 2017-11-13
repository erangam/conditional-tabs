import React from 'react';
import FeldmanRoute from '../../routes/feldman';

import '../../assets/css/epub.css';

const Feldman = props => {
	console.log(props);
	return (
		<div className="revel">
			<div className="chapter">
				<FeldmanRoute />
			</div>
		</div>
	);
};

export default Feldman;
