import { FETCH_FIREBASE_DATA } from '../actions/getFirebaseData';
export default function(state = [], action) {
	switch (action.type) {
		case FETCH_FIREBASE_DATA:
			// always create a new version of state, never alter it.
			return [action.payload, ...state];
		default:
	}
	return state;
}
