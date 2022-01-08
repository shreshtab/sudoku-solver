import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './index';

export const store: Store = createStore(
    rootReducer, 
    undefined, 
    composeWithDevTools(applyMiddleware(thunk))
  );