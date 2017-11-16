import React, { Component } from 'react';
import { Modal as ModalWithFooter } from '@pearson-components/modal';

// loads UI Kit & Pearson CSS
class PearsonModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstModalIsShown: false,
			secondModalIsShown: false,
			text: {
				headerTitle: 'Sample Response',
				closeButtonSRText: 'example',
				modalSaveButtonText: 'Ok',
				modalCancelButtonText: 'Close'
			}
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		if (this.state.firstModalIsShown === false) {
			this.setState({ firstModalIsShown: true });
		}
	}

	render() {
		const { firstModalIsShown, text } = this.state;

		return (
			<div>
				<button
					type="button"
					className="pe-btn--btn_large "
					onClick={this.handleClick}
				>
					<span>{this.props.buttonText}</span>
					{this.props.showIcon === false ? (
						''
					) : (
						<svg
							focusable="false"
							className={'pe-icon--show-on-18' + this.props.icon}
							role="img"
							aria-label="audio"
						>
							<use xlinkHref={'#' + this.props.icon} />
						</svg>
					)}
				</button>
				<ModalWithFooter
					isShown={firstModalIsShown}
					text={text}
					footerVisible={false}
					cancelBtnHandler={() => this.setState({ firstModalIsShown: false })}
					successBtnHandler={() => console.log('Success!!!!!!')}
				>
					<p>{this.props.modalContent}</p>
				</ModalWithFooter>
			</div>
		);
	}
}

export default PearsonModal;
