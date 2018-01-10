import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavControls extends Component {
	constructor(props) {
		super(props);
		this.numberOfPages = parseInt(this.props.numberOfPages, 10) - 1;
		this.handleOnClick = this.handleOnClick.bind(this);
	}

	handleOnClick(event) {
		this.props.pageUpdate();
		window.scrollTo(0, 0);
	}

	render() {
		console.log(this.props.numberOfPages);
		return (
			<div id="prevNextNav" className="nav-controls">
				<Link
					to={
						this.props.currentPage !== 1
							? this.props.prevPath
							: this.props.subPath + 1 + this.props.query + this.props.hash
					}
					data-prev-page={this.props.currentPage.toString()}
					className="previous"
					onClick={this.handleOnClick}
					disabled={this.props.currentPage === 1}
				>
					<svg
						focusable="false"
						className="pe-icon--chevron-back-24"
						role="img"
						aria-label="audio"
					>
						<use xlinkHref="#chevron-back-24" />
					</svg>
				</Link>
				<Link
					to={
						this.props.currentPage !== this.numberOfPages
							? this.props.nextPath
							: this.props.subPath + this.numberOfPages + this.props.query
					}
					className="next"
					onClick={this.handleOnClick}
					disabled={this.props.currentPage === this.numberOfPages}
					data-next-page={this.props.currentPage.toString()}
				>
					<svg
						focusable="false"
						className="pe-icon--chevron-next-24"
						role="img"
						aria-label="audio"
					>
						<use xlinkHref="#chevron-next-24" />
					</svg>
				</Link>
			</div>
		);
	}
}

export default NavControls;
