/*
 * @Author: lcs
 * @Date: 2019-02-13 10:49:47
 * @Last Modified by: lcs
 * @Last Modified time: 2019-02-14 17:44:17
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
  case ActionConstants.TOGGLE_HOME_BK:
    return state.set('hasBkColor', !action.bool);
  default:
    return state;
  }
};

export default reducer;
