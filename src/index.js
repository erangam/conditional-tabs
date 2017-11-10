import React from 'react';
import ReactDOM from 'react-dom';

//redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';

import './assets/css/platform.css';
import './index.css';

import App from './components/App';
import registerServiceWorker from './helpers/registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const MainApp = () => (
	<Provider store={createStoreWithMiddleware(reducers)}>
		<App />
	</Provider>
);

ReactDOM.render(<MainApp />, document.getElementById('root'));
registerServiceWorker();
