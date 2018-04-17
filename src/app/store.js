import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import LoginReducer from './reducers/LoginReducer';

const store =
    createStore(combineReducers({ LoginReducer }),
    {},
    applyMiddleware(logger, thunk));
export default store;
