import axios from 'axios';
import resources from '../epubs/feldman/resources/bm01_pg0002.xhtml';
import glossary from '../epubs/feldman/resources/bm01_pg0001.xhtml';
export const FETCH_REFERENCE_HTML = 'FETCH_REFERENCE_HTML';
export const FETCH_GLOSSARY_HTML = 'FETCH_GLOSSARY_HTML';

export function getReferenceHtml() {
	const request = axios.get(resources);
	return {
		type: FETCH_REFERENCE_HTML,
		payload: request
	};
}

export function getGlosseryHtml() {
	const request = axios.get(glossary);
	return {
		type: FETCH_GLOSSARY_HTML,
		payload: request
	};
}
