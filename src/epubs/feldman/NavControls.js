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
		this.pageNumber = parseInt(this.pathArr[3], 10);

		this.numberOfPages = parseInt(this.props.numberOfPages, 10);
		this.subPath = '/' + this.subDirectory + '/';

		this.handleOnClick = this.handleOnClick.bind(this);
	}

	componentWillMount() {
		this.setState({ currentPage: this.pageNumber });
	}

	handleOnClick(event) {
		const currentPageNumber = parseInt(
				event.currentTarget.getAttribute('data-current'),
				10
			),
			link = event.currentTarget.getAttribute('data-link');

		if (link === 'next') {
			if (currentPageNumber < this.numberOfPages) {
				this.setState({ currentPage: currentPageNumber + 1 });
			} else {
				return;
			}
		} else {
			if (currentPageNumber > 1) {
				this.setState({ currentPage: currentPageNumber - 1 });
			} else {
				return;
			}
		}
	}

	render() {
		console.log(this.props);
		const prevPath =
				this.subPath +
				parseInt(this.state.currentPage - 1, 10) +
				this.props.query +
				this.props.hash,
			nextPath =
				this.subPath +
				parseInt(this.state.currentPage + 1, 10) +
				this.props.query +
				this.props.hash;
		return (
			<div className="nav-controls">
				<Link
					to={
						this.state.currentPage - 1 !== 0
							? prevPath
							: 1 + this.props.query + this.props.hash
					}
					data-prev={this.state.currentPage - 1}
					data-current={this.state.currentPage}
					className="previous"
					onClick={this.handleOnClick}
					data-link="prev"
					disabled={this.state.currentPage - 1 !== 0}
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
						this.state.currentPage + 1 !== this.numberOfPages + 1
							? nextPath
							: this.numberOfPages + this.props.query + this.props.hash
					}
					data-next={this.state.currentPage + 1}
					data-current={this.state.currentPage}
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
