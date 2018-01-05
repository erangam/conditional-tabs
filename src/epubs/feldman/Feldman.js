// State held component not using Redux

import React, { Component } from 'react';
import FeldmanRoute from './FeldmanRoute';
class Feldman extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: '',
			subPath: ''
		};

		this.onClick = this.onClick.bind(this);
		this.returnSubPath = this.returnSubPath.bind(this);
	}

	componentWillMount() {
		this.setState({ currentPage: this.returnPageNumber() });
	}

	componentDidUpdate(prevProps, prevState) {
		const reference = this.returnSubPath();
		if (reference !== '/reference/' && reference !== '/glossary/') {
			if (prevState.currentPage !== this.returnPageNumber()) {
				this.setState({ currentPage: this.returnPageNumber() });
				this.setState({ subPath: this.returnSubPath() });
			}
		}
	}

	returnSubPath() {
		const pathArr = this.props.location.pathname.split('/'),
			subDirectory = pathArr[2];
		return '/' + subDirectory + '/';
	}

	returnNextPath() {
		const reference = this.returnSubPath();
		if (reference !== '/reference/' && reference !== '/glossary/') {
			return (
				this.returnSubPath() +
				parseInt(this.state.currentPage + 1, 10) +
				this.props.location.search +
				this.props.location.hash
			);
		} else {
			return (
				this.state.subPath +
				parseInt(this.state.currentPage, 10) +
				this.props.location.search
			);
		}
	}

	returnPrevPath() {
		const reference = this.returnSubPath();
		if (reference !== '/reference/' && reference !== '/glossary/') {
			return (
				this.returnSubPath() +
				parseInt(this.state.currentPage - 1, 10) +
				this.props.location.search +
				this.props.location.hash
			);
		} else {
			return (
				this.state.subPath +
				parseInt(this.state.currentPage, 10) +
				this.props.location.search
			);
		}
	}

	returnPageNumber() {
		const pathArr = this.props.location.pathname.split('/');
		return parseInt(pathArr[3], 10);
	}

	onClick() {
		this.setState({ currentPage: this.returnPageNumber() });
	}

	render() {
		return (
			<div className="revel">
				<div className="chapter">
					<FeldmanRoute
						currentPage={this.state.currentPage}
						pageUpdate={this.onClick}
						prevPath={this.returnPrevPath()}
						nextPath={this.returnNextPath()}
						match={this.props.match.path}
						currentPath={this.props.history.location.pathname}
						hash={this.props.location.hash}
						query={this.props.location.search}
					/>
				</div>
			</div>
		);
	}
}

export default Feldman;
