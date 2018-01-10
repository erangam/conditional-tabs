export function returnSubPath(props) {
	const pathArr = props.location.pathname.split('/'),
		subDirectory = pathArr[2];
	return '/' + subDirectory + '/';
}

export function returnNextPath(props, state) {
	const reference = returnSubPath(props);
	if (reference !== '/reference/' && reference !== '/glossary/') {
		return (
			returnSubPath(props) +
			parseInt(state.currentPage + 1, 10) +
			props.location.search +
			props.location.hash
		);
	} else {
		return (
			state.subPath + parseInt(state.currentPage, 10) + props.location.search
		);
	}
}

export function returnPrevPath(props, state) {
	const reference = returnSubPath(props);
	if (reference !== '/reference/' && reference !== '/glossary/') {
		return (
			returnSubPath(props) +
			parseInt(state.currentPage - 1, 10) +
			props.location.search +
			props.location.hash
		);
	} else {
		return (
			state.subPath + parseInt(state.currentPage, 10) + props.location.search
		);
	}
}

export function click() {
	document.onload = window.scrollTo(0, 0);
	const anchors = document.querySelectorAll('a');
	anchors.forEach(anchor => {
		anchor.addEventListener('click', event => {
			const classNames = event.currentTarget.getAttribute('class');
			if (classNames === 'xref') {
				event.preventDefault();
				const hrefs = event.currentTarget.getAttribute('href'),
					element = document.getElementById(hrefs.substr(1));
				element.scrollIntoView();
			}
		});
	});
}
