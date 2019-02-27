/*
 * @Author: Detcx
 * @Date: 2019-02-14 14:21:34
 * @Last Modified by: Detcx
 * @Last Modified time: 2019-02-24 12:56:00
 * @Description: App 顶层容器
 */

import React, { Fragment, lazy, Suspense } from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import appLess from './app.less';

const Home = lazy(() => import(/* webpackChunkName: "chunk-home" */ '../home/Home'));
const About = lazy(() => import(/* webpackChunkName: "chunk-about" */ '../about/About'));
const AntdTest = lazy(() => import(/* webpackChunkName: "chunk-antdTest" */ '../forAntd/AntdTest'));
const Product = lazy(() => import(/* webpackChunkName: "chunk-product" */ '../product/Product'));
const Header = lazy(() => import(/* webpackChunkName: "chunk-header" */ '__PublicComponents__/header/Header'));

const App = props => {
  // eslint-disable-next-line react/prop-types
  const { match: { path, url } } = props;
  // console.log('App path: ', props);
  return (
    <Fragment>
      <Suspense fallback={<div>loading...</div>}>
        <Header />
        <hr />
        <section className={appLess.section}>
          <NavLink to={`${url}/home`} activeClassName={appLess.navLinkActive} exact>Home</NavLink>
          <span> | </span>
          <NavLink to={`${url}/product`} activeClassName={appLess.navLinkActive}>Products</NavLink>
          <span> | </span>
          <NavLink activeClassName={appLess.navLinkActive} to={`${url}/about`}>About</NavLink>
          <span> | </span>
          <NavLink activeClassName={appLess.navLinkActive} to={`${url}/antdTest`}>AntdTest</NavLink>
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
            <Switch>
              {/* exact 很关键！ */}
              <Redirect exact from={`${path}`} to={`${path}/home`} />
              <Route path={`${path}/home`} render={props => <Home {...props} />} />
              <Route path={`${path}/about`} render={props => <About {...props} />} />
              <Route path={`${path}/antdTest`} render={props => <AntdTest {...props} />} />
              <Route path={`${path}/product`} render={props => <Product {...props} />} />
            </Switch>
          </div>
        </section>
        <footer className={appLess.footer}>footer</footer>
      </Suspense>
    </Fragment>
  );
};

export default App;
