import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import './index.css';
import App from './App';
import rootReducer from './rootReducer'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    rootReducer
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
