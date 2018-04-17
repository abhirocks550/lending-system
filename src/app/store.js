import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import LoginReducer from './reducers/LoginReducer';
import ListLenderReducer from './reducers/ListLenderReducer';

const store =
    createStore(combineReducers({ LoginReducer, ListLenderReducer }),
    {},
    applyMiddleware(logger, thunk));
export default store;
