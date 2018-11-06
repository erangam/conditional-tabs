import React, { Component, Fragment } from 'react';
import '../assets/css/home.css';
import {
	Tabs,
	Pane
} from '@pearson-components/elements-sdk/build/dist.elements-sdk';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false
		};
		this.handleStateChange = this.handleStateChange.bind(this);
	}

	componentDidUpdate() {
		const getActiveButton = document.querySelector('.activeTab'),
			getCoord = getActiveButton.getBoundingClientRect(),
			slider = document.querySelector('.pe-tabs--slider');
		slider.style.left = `${getCoord.left}px`;
	}
	handleStateChange() {
		this.setState({ visible: !this.state.visible });
	}

	render() {
		console.log(this.state);
		return (
			<div className="home">
				<header className="App-header">
					<h1 className="pe-page-title">Conditional Tab Rendering</h1>
				</header>
				<section>
					<Tabs>
						<Pane label="Tab One" />
						<Pane label="Tab Two" />
						<Pane label="Tab Three" />
						{this.state.visible === true ? (
							<Pane label="Tab Four" />
						) : (
							<Fragment />
						)}
					</Tabs>
				</section>
				<section>
					<button onClick={this.handleStateChange} style={{ marginTop: '2em' }}>
						{this.state.visible === false
							? 'Add a Fourth Tab'
							: 'Remove Fourth Tab'}
					</button>
				</section>
			</div>
		);
	}
}

export default Home;
