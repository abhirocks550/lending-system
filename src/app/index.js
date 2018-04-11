import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './container/App';
import Posts from './components/Posts/Posts';
import Comments from './components/Comments/Comments';
import * as PostActions from './actions/postActions';

store.dispatch(PostActions.GetPosts());

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} >
                <IndexRoute component={Posts} />
                <Route path="comments" component={Comments} />
            </Route>
        </Router>
    </Provider>, window.document.getElementById('app'));
