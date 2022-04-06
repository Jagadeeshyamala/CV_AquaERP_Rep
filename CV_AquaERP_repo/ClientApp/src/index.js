import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';  
import { Provider } from 'react-redux';
import thunk from "redux-thunk";  
import store from './store';

  
ReactDOM.render(  
    <Provider store={store}>  
        <App />  
    </Provider>, document.getElementById('root'));  
reportWebVitals();
