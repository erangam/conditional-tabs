// State held component not using Redux

import React, { Component } from 'react';

class AudioControl extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showAudio: false
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		if (this.state.showAudio === false) {
			this.setState({ showAudio: true });
		} else {
			this.setState({ showAudio: false });
		}
	}

	render() {
		return (
			// JSX GOES HERE
			<aside className="ls_audio">
				<button
					type="button"
					className="pe-btn--btn_large "
					onClick={this.handleClick}
				>
					<span>
						{this.state.showAudio === false ? 'Listen to Audio' : 'Close Audio'}
					</span>
					<svg
						focusable="false"
						className="pe-icon--audio-low-18"
						role="img"
						aria-label="audio"
					>
						<use xlinkHref="#audio-low-18" />
					</svg>
				</button>
				<div
					className="player-container-wrapper"
					style={{ display: this.state.showAudio === false ? 'none' : 'block' }}
				>
					<div className="player-container">
						<audio id="player-1" src={this.props.src} controls="controls">
							<p>Your browser doesn't support HTML5 audio</p>
						</audio>
					</div>
				</div>
			</aside>
		);
	}
}

export default AudioControl;
