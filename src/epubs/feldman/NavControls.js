import React, { Component } from 'react';

import data from './TableOfContents.json';

class NavControls extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: this.props.history
		};
	}

	componentDidMount() {
		console.log(data);
	}

	render() {
		return (
			<div className="nav-controls">
				<a href="/feldman/chapter-eight/one" className="previous">
					<svg
						focusable="false"
						className="pe-icon--chevron-back-24"
						role="img"
						aria-label="audio"
					>
						<use xlinkHref="#chevron-back-24" />
					</svg>
				</a>

				<a href="/feldman/chapter-eight/two" className="next">
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
