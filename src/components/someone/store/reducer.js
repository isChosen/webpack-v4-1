/*
 * @Author: liangchaoshun
 * @Date: 2019-02-13 10:49:47
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-16 15:42:55
 * @Description: Home Reducer
 */

import { fromJS } from 'immutable';
import { TOGGLE_SOMEONE_BK } from '__StorePath__/actionTypes';

const initState = fromJS({
  hasBkColor: false
});

const reducer = (state = initState, action) => {
  const { type } = action;
  switch (type) {
  case TOGGLE_SOMEONE_BK:
    return state.set('hasBkColor', !action.bool);
  default:
    return state;
  }
};

export { reducer };
