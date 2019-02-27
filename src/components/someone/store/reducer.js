/*
 * @Author: Detcx
 * @Date: 2019-02-14 15:06:59
 * @Last Modified by: Detcx
 * @Last Modified time: 2019-02-18 11:02:57
 * @Description: Someone Reducer
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
