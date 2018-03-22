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

	componentDidUpdate (prevProps, prevState) {
		if (this.props.path !== "/ciccarelli/glossary" && this.props.path !== "/ciccarelli/reference") {
			if (prevProps.currentPage !== this.props.currentPage) {
				this.setState({value: this.props.currentPage});
			}
		}
	}


	onChange (event) {
		const path = this.props.path.split('/');
		const newPath = '/' + path[1] + '/' + path[2] + '/' + event;
		this.setState({value: event});
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
