import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import LoginReducer from './reducers/LoginReducer';
import ListLenderReducer from './reducers/ListLenderReducer';
import TransactionReducer from './reducers/TransactionReducer';
import RequestReducer from './reducers/RequestReducer';

const store =
    createStore(combineReducers({ LoginReducer, ListLenderReducer, TransactionReducer, RequestReducer }),
    {},
    applyMiddleware(logger, thunk));
export default store;
