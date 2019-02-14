/*
 * @Author: lcs
 * @Date: 2019-2-14 15:04:56
 * @Last Modified by: lcs
 * @Last Modified time: 2019-02-14 15:05:27
 * @Description: Home Store
 */

import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;
