/*
 * @Author: liangchaoshun
 * @Date: 2019-02-13 10:49:47
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-16 15:42:20
 * @Description: Home Reducer
 */

import { fromJS } from 'immutable';
import { TOGGLE_HOME_BK, RANDOM_FETCH_SUCCEEDED } from '__StorePath__/actionTypes';

// initState 若没有声明默认值，则组件中需要设置 defaultProps
const initState = fromJS({
  hasBkColor: false
  // randomNum: null
});

const reducer = (state = initState, action) => {
  const { type } = action;
  switch (type) {
  case TOGGLE_HOME_BK:
    return state.set('hasBkColor', !action.bool);
  case RANDOM_FETCH_SUCCEEDED: {
    const { result: { data } } = action;
    return state.set('randomNum', data.data);
  }
  default:
    return state;
  }
};

export { reducer };
