import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import PostReducer from './reducers/postReducers';
import CommentReducer from './reducers/commentReducers';

const store =
    createStore(combineReducers({ PostReducer, CommentReducer }),
    {},
    applyMiddleware(logger, thunk));
export default store;
