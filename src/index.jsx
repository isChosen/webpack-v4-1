/*
 * @Author: liangchaoshun
 * @Date: 2019-01-31 15:11:44
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-20 18:40:29
 * @Description: React Root
 */

import React from 'react';
import { render } from 'react-dom';
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '__StorePath__';
import Dashboard from '__ComponentsPath__/dashboard/Dashboard';
import Login from '__ComponentsPath__/login/Login';

const App = () => (
  <Provider store={store}>
    <Switch>
      {/* <Route path="/login" exact component={props => <Login {...props} />} />
      <Route path="/" component={props => <Dashboard {...props} />} /> */}
      <Redirect exact from="/" to="/login" />
      <Route path="/login" component={props => <Login {...props} />} />
      <Route path="/dashboard" component={props => <Dashboard {...props} />} />
    </Switch>
  </Provider>
);

render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
