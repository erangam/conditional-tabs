import React from 'react';
import CoachMarkContainer from '../pearson/coachmark/CoachMarkContainer';

// uses popper js to control positioning
// https://popper.js.org/popper-documentation.html

const Example = props => {
	return (
		<CoachMarkContainer
			// ID to assign coacmark
			id={'popTwo'}
			// Reference ID you want the coacmark to stick to
			reference={'chatBox'}
			// position of the arrow
			location={'center'}
			// position relative to the Reference ID
			placement="top-start"
			title={'Here if you need me'}
			content={
				'I can answer questions you might have about the topic we are currently discussing.'
			}
			label={'Got it'}
			// arrow offset
			arrow={'50px'}
		/>
	);
};

export default Example;
