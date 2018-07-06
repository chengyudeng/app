import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Login from './container/login/login';
import Register from './container/register/register';
import AuthRoute from './component/authRoute/authRoute';
import BossInfo from './container/bossinfo/bossinfo';
import GeniusInfo from './container/geniusinfo/geniusinfo';
import Dashboard from './component/dashboard/dashboard';
import reducers from './reducers';
import './config';
import './index.css';

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

function Boss () {
    return <h2>boss</h2>;
}

// boss genius me msg 4个页面
ReactDOM.render(
    (<Provider store={ store }>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Switch>
                    <Route path='/bossinfo' component={ BossInfo }></Route>
                    <Route path='/geniusinfo' component={ GeniusInfo }></Route>
                    <Route path='/login' component={ Login }></Route>
                    <Route path='/register' component={ Register }></Route>
                    <Route component={ Dashboard }></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
);




