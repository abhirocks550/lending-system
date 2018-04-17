import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './container/App';
import Login from './components/Login/Login.js';
import Borrower from './components/Borrower/BorrowerDashboard.js';
import ListLender from './components/Borrower/ListLender';
import Transactions from './components/Borrower/Transactions.js';

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} >
                <IndexRoute component={Login} />
            </Route>
            
            <Route path="/borrowerPage" component={Borrower}>
               <IndexRoute component={Transactions} />
               <Route path="/listLenders" component={ListLender}/>
            </Route>

        </Router>
    </Provider>, window.document.getElementById('app'));
