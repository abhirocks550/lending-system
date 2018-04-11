import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

const store =
    createStore(combineReducers({  }),
    {},
    applyMiddleware(logger, thunk));
export default store;
