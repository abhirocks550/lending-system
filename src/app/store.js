import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import LoginReducer from './reducers/LoginReducer';
import ListLenderReducer from './reducers/ListLenderReducer';
import TransactionReducer from './reducers/TransactionReducer';

const store =
    createStore(combineReducers({ LoginReducer, ListLenderReducer, TransactionReducer }),
    {},
    applyMiddleware(logger, thunk));
export default store;
