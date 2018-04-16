import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './container/App';
import Posts from './components/Posts/Posts';
import Comments from './components/Comments/Comments';
import AddPosts from './components/Posts/AddPosts';
import Login from './components/Login/Login.js';
import * as PostActions from './actions/postActions';

store.dispatch(PostActions.GetPosts());

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} >
                <IndexRoute component={Posts} />
                <Route path="/posts" component={AddPosts} />
                <Route path="comments" component={Comments} />
                <Route path="login" component={Login} />
            </Route>
        </Router>
    </Provider>, window.document.getElementById('app'));
