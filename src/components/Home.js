import React, { Component } from 'react';
import '../assets/css/home.css';
import { connect } from 'react-redux';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		console.log(this.props);
		return (
			<div className="home">
				<header className="App-header">
					<h1 className="pe-page-title">
						Welcome to the Pearson Prototype Platform!
					</h1>
					<h2 className="pe-title">
						Start building by going to './src/components/Home.js'
					</h2>
				</header>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		// from reducer
		data: state.data
	};
}

export default connect(mapStateToProps)(Home);
