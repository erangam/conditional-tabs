import { FETCH_GLOSSARY_HTML } from '../actions/epubResources';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_GLOSSARY_HTML:
			// always create a new version of state, never alter it.
			return [action.payload.data, ...state];
		default:
	}
	return state;
}
