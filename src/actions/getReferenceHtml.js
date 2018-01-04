import axios from 'axios';
export const FETCH_REFERENCE_HTML = 'FETCH_REFERENCE_HTML';

// change this url to the api of your choice. Data will bind to a prop called 'apiData' within the redux store.
const apiUrl = '/static/media/bm01_pg0002.8841bcdf.xhtml';

export function getReferenceHtml() {
	const request = axios.get(apiUrl, {
		params: {
			// pass in tokens & keys or other params here
			// token: 'a59674f5-f9ae-41f2-b30d-9438fd87b6db',
		}
	});
	return {
		type: FETCH_REFERENCE_HTML,
		payload: request
	};
}
