import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import thunkMiddleWare from 'redux-thunk';
import promiseMiddleWare from 'redux-promise-middleware';
import reducers from './store/reducer';
import './index.css';
import App from '../src/components/space';
import * as serviceWorker from './serviceWorker';
// import history from './history';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();   


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,
  composeEnhancers(applyMiddleware(thunkMiddleWare, promiseMiddleWare()))
);

export default store;


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/address" component={App}></Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
