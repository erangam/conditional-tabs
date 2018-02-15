// Stateless component boilerplate
import React from 'react';
const BasicSelect = props => {
	return (
		<div className="select">
			<div className="basic-select">
				<label className="pe-textLabelInput__label" htmlFor="selectReport">
					{props.label}
				</label>
				<div className="pe-select-container">
					<select
						value={props.value}
						className="pe-selectInput--basic"
						id="selectReport"
						onChange={props.onChange}
					>
						{props.options.map((option, index) => {
							return (
								<option key={index} value={option}>
									{option}
								</option>
							);
						})}
					</select>
					<svg
						focusable="false"
						className="pe-icon--dropdown-open-sm-18"
						aria-hidden
					>
						<use
							xmlnsXlink="http://www.w3.org/1999/xlink"
							xlinkHref="#dropdown-open-sm-18"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default BasicSelect;
