import React from 'react';
import YourEpubRoutes from './yourEpubRoutes';

const myBook = props => {
	console.log(props);
	return (
		<div className="revel">
			<div className="chapter">
				<YourEpubRoutes
					match={props.match.path}
					currentPath={props.history.location.pathname}
					hash={props.location.hash}
					query={props.location.search}
				/>
			</div>
		</div>
	);
};

export default myBook;
