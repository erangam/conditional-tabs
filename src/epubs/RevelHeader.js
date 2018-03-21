// Stateless component boilerplate
import React, {Fragment} from "react";
import menu from 'material-design-icons/navigation/svg/design/ic_menu_24px.svg'
const RevelHeader = (props) => {
	if (props.display === true ) {
		return (
			<div className="revel-header" style={{zIndex: "100"}}>
				<button className="pe-icon--btn">
					<img src={menu} />
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
