import React from 'react';
import ReactDOM from 'react-dom';

// loads UI Kit & Pearson CSS
import './assets/css/platform.css';
import './assets/css/index.css';

import App from './App';
import registerServiceWorker from './helpers/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
