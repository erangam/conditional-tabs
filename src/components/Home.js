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
						Start building by going to './src/components/Home.js'
					</h2>
				</header>
			</div>
		);
	}
}

export default Home;
