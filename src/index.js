import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/app';
import registerServiceWorker from './registerServiceWorker';
import './assets/stylesheets/normalize.css';
import './assets/stylesheets/app.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
