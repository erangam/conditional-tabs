// State held component not using Redux
import React, {Component} from 'react';
import InputRange from 'react-input-range';
import '../assets/css/slider.css'

class RevelFooter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.currentPage
		};
		this.onChange = this.onChange.bind(this);
		this.value = ''
	}

	// COMPONENT INIT
	// componentWillMount is called before the render method is executed.
	// It is important to note that setting the state in this phase will not trigger a re-rendering.
	componentWillMount() {

	}

	// The DOM can be accessed in this method, enabling to define DOM manipulations or data fetching operations.
	// Any DOM interactions should always happen in this phase not inside the render method.
	componentDidMount() {

	}

	// componentWillUpdate gets called as soon as the the shouldComponentUpdate returned true.
	// Any state changes via this.setState are not allowed as this method should be strictly used
	// to prepare for an upcoming update not trigger an update itself.


	// componentDidUpdate is called after the render method. Similar to the componentDidMount,
	// this method can be used to perform DOM operations after the data has been updated.
	componentDidUpdate (prevProps, prevState) {
		if (prevProps.currentPage !== this.props.currentPage) {
			this.setState({value: this.props.currentPage});
		}
	}

	// UPDATE PROPS
	// componentWillReceiveProps is only called when the props have changed and when this is not an initial rendering.
	// componentWillReceiveProps enables to update the state depending on the existing and upcoming props, without triggering another rendering.
	// One interesting thing to remember here is that there is no equivalent method for the state as state changes should never trigger any props changes.
	componentWillReceiveProps () {

	}

	onChange (event) {
		const path = this.props.path.split('/');
		const newPath = '/' + path[1] + '/' + path[2] + '/' + event;
		console.log(newPath);
		this.setState({value: event});
		console.log(this.props);
		this.props.history.push(newPath)
	}

	render () {
		if (this.props.display === true) {
			return (
				<div className="revel-footer">
					<button className="pe-icon--btn">
						<svg focusable="false" className="pe-icon--view-list-18" aria-hidden="false" aria-label="book seats" title="view list" role="img">
							<use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#view-list-18" />
						</svg>
					</button>
					<div className="slidecontainer">
						<InputRange
							maxValue={this.props.totalPages}
							minValue={1}
							value={this.state.value}
							onChange={this.onChange} />
					</div>
					<button className="pe-icon--btn">
						<svg focusable="false" className="pe-icon--font-setting-18" aria-hidden="false" aria-label="set font size" title="book seats" role="img">
							<use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#font-setting-18" />
						</svg>
					</button>
				</div>
			);
		} else {
			return (
				<div></div>
			)
		}
	}
}

export default RevelFooter;
