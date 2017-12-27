import { FETCH_API_DATA } from '../actions/getApiData';
export default function(state = [], action) {
	switch (action.type) {
		case FETCH_API_DATA:
			// always create a new version of state, never alter it.
			return [action.payload.data, ...state];
		default:
	}
	return state;
}
