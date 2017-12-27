import axios from 'axios';
export const FETCH_DATA = 'FETCH_DATA';

export function getData(conversationId) {
	const request = axios.get(
		`https://cardinal-react-two.firebaseio.com/conversations/a6c4e48d-a80a-455e-b432-c2b962c4c775.json`
	);
	return {
		type: FETCH_DATA,
		payload: request
	};
}
