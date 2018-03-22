// Stateless component boilerplate
import React from "react";
import menu from 'material-design-icons/navigation/svg/design/ic_menu_24px.svg'

const RevelHeader = (props) => {
	if (props.display === true ) {
		return (
			<div className="revel-header" style={{zIndex: "100"}}>
				<button className="pe-icon--btn">
					<img src={menu} alt={"toc menu"}/>
				</button>
			</div>
		);
	} else {
		return (
			<div></div>
		)
	}

}

export default RevelHeader
