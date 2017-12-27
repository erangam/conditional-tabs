// Redux Reducers go here
import { combineReducers } from 'redux';
import ReducerApiData from './reducer_api_data';

const rootReducer = combineReducers({
	apiData: ReducerApiData
});

export default rootReducer;
