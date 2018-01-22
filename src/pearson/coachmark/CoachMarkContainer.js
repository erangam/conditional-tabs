import React, { Component } from 'react';
import CoachMark from './CoachMark';
import Popper from 'popper.js';

class CoachMarkContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			display: true
		};
		this.handleOnclick = this.handleOnclick.bind(this);
	}

	componentDidMount() {
		this.attachPopper();
	}

	componentDidUpdate() {
		this.attachPopper();
	}

	attachPopper() {
		const reference = document.getElementById(this.props.reference);
		const popper = document.getElementById(this.props.id);
		const place = this.props.placement;

		if (reference !== null) {
			new Popper(reference, popper, {
				placement: place,
				escapeWithReference: false,
				preventOverflow: { enabled: false }
			});
		}
	}
	handleOnclick() {
		this.setState({ display: false });
	}
	render() {
		if (this.state.display === false) {
			return <div id={this.props.id} style={{ zIndex: '900' }} />;
		} else {
			return (
				<div id={this.props.id} style={{ zIndex: '900' }}>
					<CoachMark
						close={this.handleOnclick}
						title={this.props.title}
						content={this.props.content}
						label={this.props.label}
						location={this.props.location}
						arrow={this.props.arrow}
					/>
				</div>
			);
		}
	}
}

export default CoachMarkContainer;
