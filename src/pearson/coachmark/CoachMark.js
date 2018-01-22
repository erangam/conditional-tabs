// Stateless component boilerplate
import React from 'react';

const CoachMark = props => {
	return (
		<div className="pe-proto coachmark">
			<div
				className={'arrow ' + props.location}
				style={{ left: props.arrow }}
			/>
			<div className="content">
				<div className="title-container">
					<div className="pe-label pe-label--bold">{props.title}</div>
				</div>
				<p
					className="pe-label"
					style={{ textAlign: 'left', fontSize: '14px', lineHeight: '1.5em' }}
				>
					{props.content}
				</p>
				<button
					style={{ width: '100%', fontSize: '14px' }}
					className="pe-link--btn coach-link"
					onClick={props.close}
					aria-label="Close top coach mark"
				>
					{props.label}
				</button>
			</div>
		</div>
	);
};

export default CoachMark;
