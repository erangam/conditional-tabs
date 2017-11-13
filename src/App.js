import React, { Component } from 'react';
import Routes from './routes/index';

//redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export default () => (
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Routes />
	</Provider>
);
