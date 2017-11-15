import React from 'react';

const IconButton = props => {
	return (
		<button data-modal-id="sampleBtn" type="button" class="pe-btn--btn_large ">
			View Sample Response
			<svg
				focusable="false"
				class="pe-icon--show-on-18"
				role="img"
				aria-label="show"
			>
				<use
					xmlns:xlink="http://www.w3.org/1999/xlink"
					xlink:href="#show-on-18"
				/>
			</svg>
		</button>
	);
};

export default IconButton;
