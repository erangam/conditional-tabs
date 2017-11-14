import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavControls extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: '',
			nextPage: '',
			prevPage: ''
		};

		this.pathArr = this.props.currentPath.split('/');
		this.base = this.pathArr[1];
		this.subDirectory = this.pathArr[2];
		this.pageNumber = parseInt(this.pathArr[3]);
		this.numberOfPages = parseInt(this.props.numberOfPages);
		this.newPath = '/' + this.subDirectory + '/';
		this.handleOnClick = this.handleOnClick.bind(this);
	}

	componentWillMount() {
		this.setState({ currentPage: this.pageNumber });
		this.setState({ nextPage: this.getNextPage() });
		this.setState({ prevPage: this.getPrevPage() });
	}

	handleOnClick(event) {
		const nextLink = event.currentTarget.getAttribute('data-link');
		if (nextLink === 'previous') {
			if (this.state.currentPage !== 1) {
				const newPage = this.state.currentPage - 1;
				this.setState({ currentPage: newPage });
				this.setState({ prevPage: this.newPath + newPage });
			} else {
				return this.newPath + this.pageNumber;
			}
		} else {
			if (this.state.currentPage < this.numberOfPages) {
				const newPage = this.state.currentPage + 1;
				this.setState({ currentPage: newPage });
				this.setState({ nextPage: this.newPath + newPage });
			} else {
				return this.newPath + this.pageNumber;
			}
		}
	}

	getNextPage() {
		if (this.pageNumber < this.numberOfPages) {
			const newPage = this.pageNumber + 1;
			return this.newPath + newPage;
		} else {
			return this.newPath + this.pageNumber;
		}
	}

	getPrevPage() {
		if (this.pageNumber !== 1) {
			const newPage = this.pageNumber - 1;
			return this.newPath + newPage;
		} else {
			return this.newPath + this.pageNumber;
		}
	}

	render() {
		return (
			<div className="nav-controls">
				<Link
					to={this.state.prevPage}
					className="previous"
					onClick={this.handleOnClick}
					data-link="previous"
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
					to={this.state.nextPage}
					className="next"
					onClick={this.handleOnClick}
					data-link="next"
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
