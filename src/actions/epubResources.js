import axios from 'axios';
import resources from './epubs/feldman/resources/bm01_pg0002.xhtml';
import glossary from './epubs/feldman/resources/bm01_pg0001.xhtml';
export const FETCH_REFERENCE_HTML = 'FETCH_REFERENCE_HTML';
export const FETCH_GLOSSARY_HTML = 'FETCH_GLOSSARY_HTML';
const baseUrl = process.env.PUBLIC_URL;
// change this url to the api of your choice. Data will bind to a prop called 'apiData' within the redux store.

export function getReferenceHtml() {
	console.log(baseUrl);
	console.log(resources);
	const request = axios.get(baseUrl + resources);
	return {
		type: FETCH_REFERENCE_HTML,
		payload: request
	};
}

export function getGlosseryHtml() {
	const request = axios.get(baseUrl + glossary);
	return {
		type: FETCH_GLOSSARY_HTML,
		payload: request
	};
}
