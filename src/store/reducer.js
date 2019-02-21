/*
 * @Author: liangchaoshun
 * @Date: 2019-02-13 10:49:47
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-21 14:47:09
 * @Description: Global Reducer: 组件中的 state 对象是在此创建的
 */

import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer } from '__ComponentsPath__/home/store/reducer';
import { reducer as someoneReducer } from '__ComponentsPath__/someone/store/reducer';
import { reducer as productAReducer } from '__ComponentsPath__/product/producta/store/reducer';
import { reducer as checkAuthReducer } from '__PublicComponents__/auth/reducer';

const reducer = combineReducers({
  auth: checkAuthReducer,
  home: homeReducer,
  someone: someoneReducer,
  producta: productAReducer
});

export default reducer;
