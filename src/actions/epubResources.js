import axios from 'axios';
export const FETCH_REFERENCE_HTML = 'FETCH_REFERENCE_HTML';
export const FETCH_GLOSSARY_HTML = 'FETCH_GLOSSARY_HTML';

export function getReferenceHtml(resources) {
	const request = axios.get(resources);
	return {
		type: FETCH_REFERENCE_HTML,
		payload: request
	};
}

export function getGlosseryHtml(glossary) {
	const request = axios.get(glossary);
	return {
		type: FETCH_GLOSSARY_HTML,
		payload: request
	};
}
