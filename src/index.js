import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.min.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router><App /></Router>, document.getElementById('app'));
registerServiceWorker();
