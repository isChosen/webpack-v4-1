/*
 * @Author: liangchaoshun
 * @Date: 2019-02-13 10:49:47
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-15 15:25:16
 * @Description: Global Reducer: 组件中的 state 对象是在此创建的
 */

import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer } from '__ComponentsPath__/home/store';
import { reducer as someoneReducer } from '__ComponentsPath__/someone/store';

const reducer = combineReducers({
  home: homeReducer,
  someone: someoneReducer
});

export default reducer;
