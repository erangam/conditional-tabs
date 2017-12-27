import React from 'react';
import MainRoute from './routes/index';
import Data from './components/Data';

//redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export default () => (
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Data>
			<MainRoute />
		</Data>
	</Provider>
);
