import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { Router , browserHistory } from 'react-router';
import routes from './routes';
import thunk from 'redux-thunk';
import { fetchInitialContacts } from './actions/index';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
     <Router history={browserHistory}  routes={routes} />
  </Provider>
  , document.querySelector('.container'));


