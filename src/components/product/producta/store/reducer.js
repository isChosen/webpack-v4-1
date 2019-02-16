/*
 * @Author: liangchaoshun
 * @Date: 2019-02-16 10:55:51
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-16 15:43:08
 * @Description: ProductA Reducer
 */

import { fromJS } from 'immutable';
import { USER_FETCH_SUCCEEDED } from '__StorePath__/actionTypes';

// initState 若没有声明默认值，则组件中需要设置 defaultProps
const initState = fromJS({
  githubUsers: ''
});

const reducer = (state = initState, action) => {
  const { type } = action;
  switch (type) {
  case USER_FETCH_SUCCEEDED: {
    // console.log('product a reducer action: ', action);
    const { user: data } = action;
    return state.set('githubUsers', JSON.stringify(data, null, 4));
  }
  default:
    return state;
  }
};

export { reducer };
