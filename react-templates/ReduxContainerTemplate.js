// State held component not using Redux

import React, {Component} from 'react';

// Redux Imports
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

// import Redux actions
import { parseData } from "../actions/parseData";

class ReduxComponent extends Component {

    // COMPONENT INIT
    // componentWillMount is called before the render method is executed.
    // It is important to note that setting the state in this phase will not trigger a re-rendering.
    componentWillMount() {

    }

    // The DOM can be accessed in this method, enabling to define DOM manipulations or data fetching operations.
    // Any DOM interactions should always happen in this phase not inside the render method.
    componentDidMount() {

    }

    // COMPONENT STATE UPDATES
    // shouldComponentUpdate is always called before the render method and enables to define if a re-rendering is needed or can be skipped.
    // Obviously this method is never called on initial rendering. A boolean value must be returned.
    shouldComponentUpdate (nextProps, nextState) {

    }

    // componentWillUpdate gets called as soon as the the shouldComponentUpdate returned true.
    // Any state changes via this.setState are not allowed as this method should be strictly used
    // to prepare for an upcoming update not trigger an update itself.


    // componentDidUpdate is called after the render method. Similar to the componentDidMount,
    // this method can be used to perform DOM operations after the data has been updated.
    componentDidUpdate (prevProps, prevState) {

    }

    // UPDATE PROPS
    // componentWillReceiveProps is only called when the props have changed and when this is not an initial rendering.
    // componentWillReceiveProps enables to update the state depending on the existing and upcoming props, without triggering another rendering.
    // One interesting thing to remember here is that there is no equivalent method for the state as state changes should never trigger any props changes.
    componentWillReceiveProps () {

    }

    render () {
        return(
            // JSX GOES HERE
            <div>

            </div>

        )
    }
}

// the connection between redux and the container
// now associates this.props.books to the component
function mapStateToProps(state) {
    return {
        // from reducer
        propData: state.propData
    }
}

// Anything returned from this function will end up as props
// on the BookList Container
function mapDispatchToProps(dispatch) {
    // whenever getData is called, the result should be pass
    // to all reducers
    return bindActionCreators({
        actionFunction: actionFunction
    }, dispatch)
}

// exports the connected mapState function and BookList
export default connect(mapStateToProps, mapDispatchToProps)(ReduxComponent);