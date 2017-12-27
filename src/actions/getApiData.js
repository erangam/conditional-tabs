import axios from 'axios';
export const FETCH_API_DATA = 'FETCH_API_DATA';

// change this url to the api of your choice. Data will bind to a prop called 'apiData' within the redux store.
const apiUrl =
	'https://cardinal-react-two.firebaseio.com/conversations/a6c4e48d-a80a-455e-b432-c2b962c4c775.json';

export function getApiData() {
	const request = axios.get(apiUrl, {
		params: {
			// pass in tokens & keys or other params here
			// token: 'a59674f5-f9ae-41f2-b30d-9438fd87b6db',
		}
	});
	return {
		type: FETCH_API_DATA,
		payload: request
	};
}
