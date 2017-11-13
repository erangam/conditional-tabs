import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavControls extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="nav-controls">
				<a href="/feldman/chapter-eight/page-one" className="previous">
					<svg
						focusable="false"
						className="pe-icon--chevron-back-24"
						role="img"
						aria-label="audio"
					>
						<use xlinkHref="#chevron-back-24" />
					</svg>
				</a>

				<a href="/feldman/chapter-eight/page-two" className="next">
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
	}
}

export default NavControls;
