// State held component not using Redux

import React, { Component } from 'react';
import references from './resources/bm04_pg0001.xhtml';
import glossary from './resources/glossary.xhtml';

// Redux Imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import Redux actions
import { getReferenceHtml, getGlosseryHtml } from '../../actions/epubResources';

class Reference extends Component {
	componentWillMount() {
		this.props.getReferenceHtml(references);
		this.props.getGlosseryHtml(glossary);
	}

	componentDidUpdate(prevProps, prevState) {
		const el = document.getElementById(this.props.location.hash.substr(1));

		if (el !== null) {
			el.scrollIntoView();
		}
	}

	createMarkup() {
		if (this.props.match.path === '/reference') {
			return { __html: this.props.referenceHtml };
		} else if (this.props.match.path === '/glossary') {
			return { __html: this.props.glossaryHtml };
		} else {
			return { __html: this.props.referenceHtml };
		}
	}

	render() {
		return (
			// JSX GOES HERE
			<div className="revel">
				<div className="chapter">
					<div className="animated fadeIn">
						<section className="bodymatter">
							<div dangerouslySetInnerHTML={this.createMarkup()} />
						</section>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		referenceHtml: state.referenceHtml,
		glossaryHtml: state.glossaryHtml
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			getReferenceHtml: getReferenceHtml,
			getGlosseryHtml: getGlosseryHtml
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Reference);
