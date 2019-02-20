/*
 * @Author: liangchaoshun
 * @Date: 2019-02-14 14:21:34
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-20 18:41:27
 * @Description: Dashboard 顶层容器
 */

import React, { Fragment, lazy, Suspense } from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import Header from '__PublicComponents__/header/Header';
import dashboardLess from './dashboard.less';

const Home = lazy(() => import(/* webpackChunkName: "chunk-home" */ '../home/Home'));
const About = lazy(() => import(/* webpackChunkName: "chunk-about" */ '../about/About'));
const Product = lazy(() => import(/* webpackChunkName: "chunk-product" */ '../product/Product'));

const Dashboard = props => {
  const { match: { path, url } } = props;
  console.log('Dashboard path: ', props);
  return (
    <Fragment>
      <Header />
      <hr />
      <section className={dashboardLess.section}>
        <NavLink to={`${url}/home`} activeClassName={dashboardLess.navLinkActive} exact>Home</NavLink>
        <span> | </span>
        <NavLink to={`${url}/product`} activeClassName={dashboardLess.navLinkActive}>Products</NavLink>
        <span> | </span>
        <NavLink activeClassName={dashboardLess.navLinkActive} to={`${url}/about`}>About</NavLink>
        <span> | </span>
        <NavLink to="/login">Login</NavLink>
        <div
          style={{
            padding: '5px',
            margin: '10px 0',
            minHeight: '300px',
            border: '1px solid #666'
          }}
        >
          <Suspense fallback={<div>loading...</div>}>
            <Switch>
              {/* exact 很关键！ */}
              <Redirect exact from={`${path}`} to={`${path}/home`} />
              <Route path={`${path}/home`} component={props => <Home {...props} />} />
              <Route path={`${path}/about`} component={props => <About {...props} />} />
              <Route path={`${path}/product`} component={props => <Product {...props} />} />
            </Switch>
          </Suspense>
        </div>
      </section>
      <footer className={dashboardLess.footer}>footer</footer>
    </Fragment>
  );
};

export default Dashboard;
