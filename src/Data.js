// State held component not using Redux
import React, { Component, Fragment } from 'react';

// Redux Imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import Redux actions
import { getApiData } from './actions/getApiData';
import { getFirebaseData } from './actions/getFirebaseData';

class Data extends Component {
	componentDidMount() {
		this.props.getData();
	}

	render() {
		console.log('data', this.props);
		return (
			// JSX GOES HERE
			<Fragment>{this.props.children}</Fragment>
		);
	}
}

// the connection between redux and the container
// now associates this.props.books to the component
function mapStateToProps(state) {
	return {
		// from reducer
		apiData: state.apiData,
		firebaseData: state.firebaseData
	};
}

// Anything returned from this function will end up as props
// on the BookList Container
function mapDispatchToProps(dispatch) {
	// whenever getData is called, the result should be pass
	// to all reducers
	return bindActionCreators(
		{
			getData: getApiData,
			getFirebaseData: getFirebaseData
		},
		dispatch
	);
}

// exports the connected mapState function and BookList
export default connect(mapStateToProps, mapDispatchToProps)(Data);
