import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import PostReducer from './reducers/postReducers';

const store =
    createStore(combineReducers({ PostReducer }),
    {},
    applyMiddleware(logger, thunk));
export default store;
