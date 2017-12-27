// Redux Reducers go here
import { combineReducers } from 'redux';
import ReducerApiData from './reducer_api_data';
import ReducerFirebaseData from './reducer_firebase_data';

const rootReducer = combineReducers({
	apiData: ReducerApiData,
	firebaseData: ReducerFirebaseData
});

export default rootReducer;
