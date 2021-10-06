import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';

// const rootReducer = combineReducers<any>({
//   gridState: 
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);