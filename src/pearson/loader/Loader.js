import React from 'react';

const Loader = props => {
	return (
		<div className={'loader ' + props.type}>
			<div className="icon">
				<i className="fa fa-spinner fa-pulse fa-2x fa-fw secondary-four" />
				<span className="sr-only">Loading...</span>
			</div>
			<div className="text">
				<span className="pe-label">Loading...</span>
			</div>
		</div>
	);
};

export default Loader;
