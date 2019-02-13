/*
 * @Author: lcs
 * @Date: 2019-02-13 10:49:29
 * @Last Modified by: lcs
 * @Last Modified time: 2019-02-13 10:49:29
 * @Description: Global Store
 */

import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;
