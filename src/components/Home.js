import React, { Component } from 'react';
import '../assets/css/home.css';
import { connect } from 'react-redux';
import firebase from '../helpers/firebase';
import { getFirebaseData } from '../actions/getFirebaseData';
import { bindActionCreators } from 'redux';

class Home extends Component {
	componentDidMount() {
		const itemsRef = firebase.database().ref('items');
		itemsRef.on('value', snapshot => {
			let items = snapshot.val();
			this.props.getFirebaseData(items);
		});
	}

	render() {
		return (
			<div className="home">
				<header className="App-header">
					<h1 className="pe-page-title">
						{this.props.firebaseData[0] !== undefined
							? this.props.firebaseData[0].title
							: ''}
					</h1>
					<h2 className="pe-title">
						{this.props.firebaseData[0] !== undefined
							? this.props.firebaseData[0].content
							: ''}
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

function mapDispatchToProps(dispatch) {
	// whenever getData is called, the result should be pass
	// to all reducers
	return bindActionCreators(
		{
			getFirebaseData: getFirebaseData
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
