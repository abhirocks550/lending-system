import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './container/App';

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} >
            </Route>
        </Router>
    </Provider>, window.document.getElementById('app'));
