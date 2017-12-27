// Redux Reducers go here
import { combineReducers } from 'redux';
import ReducerData from './reducer_data';

const rootReducer = combineReducers({
	data: ReducerData
});

export default rootReducer;
