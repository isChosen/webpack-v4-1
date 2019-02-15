/*
 * @Author: liangchaoshun
 * @Date: 2019-02-13 10:49:47
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-15 13:24:11
 * @Description: Home Reducer
 */

import { fromJS } from 'immutable';
import * as ActionConstants from './actionTypes';

// initState 若没有声明默认值，则组件中需要设置 defaultProps
const initState = fromJS({
  hasBkColor: false
  // randomNum: null
});

const reducer = (state = initState, action) => {
  const { type } = action;
  switch (type) {
  case ActionConstants.TOGGLE_HOME_BK:
    return state.set('hasBkColor', !action.bool);
  case ActionConstants.GET_RANDOM_NUMBER:
    return state.set('randomNum', action.random);
  default:
    return state;
  }
};

export default reducer;
