import { FETCH_DATA } from '../actions/getData';
export default function(state = [], action) {
	switch (action.type) {
		case FETCH_DATA:
			// always create a new version of state, never alter it.
			return [action.payload.data, ...state];
		default:
	}
	return state;
}
