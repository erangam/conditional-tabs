// Stateless component boilerplate
import React, { Component, Fragment } from 'react';
import BasicSelect from './BasicSelect';
const options = ['one', 'two', 'three'];

class BasicSelectContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filterValue: ''
		};

		this.handleOnChange = this.handleOnChange.bind(this);
	}
	handleOnChange(event) {
		this.setState({ filterValue: event.target.value });
	}

	render() {
		return (
			<Fragment>
				<BasicSelect
					options={options}
					label={'Filter By'}
					value={this.state.filterValue}
					onChange={this.handleOnChange}
				/>
			</Fragment>
		);
	}
}

export default BasicSelectContainer;
