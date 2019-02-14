/*
 * @Author: lcs
 * @Date: 2019-02-13 10:49:47
 * @Last Modified by: lcs
 * @Last Modified time: 2019-02-14 17:41:26
 * @Description: Global Reducer: 组件中的 state 对象是在此创建的
 */

import { combineReducers } from 'redux-immutable';
import homeReducer from '__ComponentsPath__/home/store/reducer';

const reducer = combineReducers({
  home: homeReducer
});

export default reducer;
