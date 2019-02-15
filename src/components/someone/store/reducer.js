/*
 * @Author: liangchaoshun
 * @Date: 2019-02-13 10:49:47
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-15 14:32:08
 * @Description: Home Reducer
 */

import { fromJS } from 'immutable';
import * as ActionConstants from './actionTypes';

const initState = fromJS({
  hasBkColor: false
});

const reducer = (state = initState, action) => {
  const { type } = action;
  switch (type) {
  case ActionConstants.TOGGLE_SELF_BK:
    return state.set('hasBkColor', !action.bool);
  default:
    return state;
  }
};

export default reducer;
