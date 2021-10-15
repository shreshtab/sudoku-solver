import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { gridReducer } from './reducers/gridReducer';
import { IAppState } from './models/index';

const rootReducer = combineReducers<IAppState>({
  gridState: gridReducer
});

export const store: Store = createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);