/*
 * @Author: liangchaoshun
 * @Date: 2019-02-13 10:49:47
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-26 19:00:04
 * @Description: Global Reducer: 组件中的 state 对象是在此创建的
 */

import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer } from '__ComponentsPath__/home/store/reducer';
import { reducer as someoneReducer } from '__ComponentsPath__/someone/store/reducer';
import { reducer as productAReducer } from '__ComponentsPath__/product/producta/store/reducer';
import { reducer as productBReducer } from '__ComponentsPath__/product/productb/store/reducer';
import { reducer as checkAuthReducer } from '__PublicComponents__/auth/reducer';
import { reducer as resIntercReducer } from '__PublicComponents__/interceptor/response/store/reducer';

const reducer = combineReducers({
  auth: checkAuthReducer,
  resInterc: resIntercReducer,
  home: homeReducer,
  someone: someoneReducer,
  producta: productAReducer,
  productb: productBReducer
});

export default reducer;
