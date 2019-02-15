/*
 * @Author: liangchaoshun
 * @Date: 2019-02-13 10:49:29
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-15 14:01:45
 * @Description: Global Store
 */

// TODO FIXME Production configuration
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const store = createStore(reducer, enhancer);

export default store;
