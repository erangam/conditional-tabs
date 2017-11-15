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
						<iframe
							data-chaucer-element-id="d4d2c6f7-f516-494c-84da-df6953ed7b3f"
							id="player-1"
							name="player-1"
							tabIndex={-1}
							aria-hidden="true"
							src={this.props.src}
							height={65}
							scrolling="no"
							style={{ border: 'none' }}
						/>
					</div>
				</div>
			</aside>
		);
	}
}

export default AudioControl;
