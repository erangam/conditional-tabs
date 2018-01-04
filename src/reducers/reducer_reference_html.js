import { FETCH_REFERENCE_HTML } from '../actions/getReferenceHtml';
export default function(state = [], action) {
	switch (action.type) {
		case FETCH_REFERENCE_HTML:
			// always create a new version of state, never alter it.
			return [action.payload.data, ...state];
		default:
	}
	return state;
}
