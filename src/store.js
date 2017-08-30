/**
 * Created by drunkengranite on 5/29/17.
 */

import allReducers from './reducers'
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'

export const history = createHistory();

const middleware = applyMiddleware(
    routerMiddleware(history),
    thunk
);

const store = createStore(allReducers, middleware);


export default store;

