/*
 * @Author: Detcx
 * @Date: 2019-02-13 10:49:29
 * @Last Modified by: Detcx
 * @Last Modified time: 2019-02-26 16:22:53
 * @Description: Global Store
 */

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import hotelSaga from './hotelSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(hotelSaga);

export default store;
