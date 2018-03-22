import React, {Component, Fragment} from 'react';
import FeldmanRoute from './FeldmanRoute';
import {
	returnNextPath,
	returnPrevPath,
	returnSubPath
} from '../helpers/navControlHelpers';

class Feldman extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: '',
			subPath: ''
		};
		this.onClick = this.onClick.bind(this);
	}

	componentWillMount() {
		this.setState({ currentPage: this.returnPageNumber() });
	}

	componentDidUpdate(prevProps, prevState) {
		const reference = returnSubPath(this.props);
		if (reference !== '/reference/' && reference !== '/glossary/') {
			if (prevState.currentPage !== this.returnPageNumber()) {
				this.setState({ currentPage: this.returnPageNumber() });
				this.setState({ subPath: returnSubPath(this.props) });
			}
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
		console.log(this.props);
		return (
			<Fragment>
				<div className="revel">
					<div className="chapter">
						<FeldmanRoute
							currentPage={this.state.currentPage}
							pageUpdate={this.onClick}
							prevPath={returnPrevPath(this.props, this.state)}
							nextPath={returnNextPath(this.props, this.state)}
							match={this.props.match.path}
							currentPath={this.props.history.location.pathname}
							hash={this.props.location.hash}
							query={this.props.location.search}
							history={this.props.history}
						/>
					</div>
				</div>
			</Fragment>

		);
	}
}

export default Feldman;
