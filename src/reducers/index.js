// Redux Reducers go here
import { combineReducers } from 'redux';
import ReducerApiData from './reducer_api_data';
import ReducerFirebaseData from './reducer_firebase_data';
import ReducerReferenceHtml from './reducer_reference_html';
import ReducerGlossaryHtml from './reducer_glossary_html';

const rootReducer = combineReducers({
	apiData: ReducerApiData,
	firebaseData: ReducerFirebaseData,
	referenceHtml: ReducerReferenceHtml,
	glossaryHtml: ReducerGlossaryHtml
});

export default rootReducer;
