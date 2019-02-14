/*
 * @Author: lcs
 * @Date: 2019-02-13 10:49:29
 * @Last Modified by: lcs
 * @Last Modified time: 2019-02-14 15:55:48
 * @Description: Global Store
 */

// TODO FIXME Production configuration
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware()
);

const store = createStore(reducer, enhancer);

export default store;
