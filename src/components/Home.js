import React, { Component } from 'react';
import firebase from '../helpers/firebase';

import '../assets/css/home.css';
import { connect } from 'react-redux';

class Home extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const itemsRef = firebase.database().ref('items');
		itemsRef.on('value', snapshot => {
			let items = snapshot.val();
			this.setState({
				items: items
			});
		});
	}
	render() {
		console.log(this.state);
		return (
			<div className="home">
				<header className="App-header">
					<h1 className="pe-page-title">
						{this.state !== null ? this.state.items.title : ''}
					</h1>
					<h2 className="pe-title">
						{this.state !== null ? this.state.items.content : ''}
					</h2>
				</header>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		// from reducer
		apiData: state.apiData,
		firebaseData: state.firebaseData
	};
}

export default connect(mapStateToProps)(Home);
