import React from 'react';

const NavControls = props => {
	return (
		<div className="nav-controls">
			<a href={props.prev} className="previous">
				<svg
					focusable="false"
					className="pe-icon--chevron-back-24"
					role="img"
					aria-label="audio"
				>
					<use xlinkHref="#chevron-back-24" />
				</svg>
			</a>

			<a href={props.next} className="next">
				<svg
					focusable="false"
					className="pe-icon--chevron-next-24"
					role="img"
					aria-label="audio"
				>
					<use xlinkHref="#chevron-next-24" />
				</svg>
			</a>
		</div>
	);
};

export default NavControls;
