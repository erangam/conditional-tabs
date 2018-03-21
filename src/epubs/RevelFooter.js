// Stateless component boilerplate
import React from "react";
const RevelFooter = (props) => {
	if (props.display === true) {
		return (
			<div className="revel-footer">
				<button className="pe-icon--btn">
					<svg focusable="false" className="pe-icon--view-list-18" aria-hidden="false" aria-label="book seats" title="view list" role="img">
						<use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#view-list-18" />
					</svg>
				</button>
				<div className="slidecontainer">
					<input type="range" min={1} max={100} defaultValue={50} className="slider" id="myRange" />
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

export default RevelFooter

