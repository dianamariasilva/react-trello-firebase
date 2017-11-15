import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'redux-zero/react';
import store from './store';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
