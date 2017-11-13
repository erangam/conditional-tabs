import React, { Component } from 'react';
import '../assets/css/home.css';

class Home extends Component {
	render() {
		return (
			<div className="home">
				<header className="App-header">
					<h1 className="pe-page-title">
						Welcome to the Pearson Prototype Platform!
					</h1>
					<h2 className="pe-title">
						Here is a list of all the projects that run off this platform.
					</h2>
				</header>
				<p className="pe-copy pe-copy--large">Coming Soon....</p>
			</div>
		);
	}
}

export default Home;
