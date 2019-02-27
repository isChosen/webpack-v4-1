/*
 * @Author: Detcx
 * @Date: 2019-02-13 10:49:47
 * @Last Modified by: Detcx
 * @Last Modified time: 2019-02-22 13:51:50
 * @Description: Product B Reducer
 */

import { fromJS } from 'immutable';
import { USERLIST_FETCH_SUCCEEDED, USERLIST_FETCH_FAILED } from '__StorePath__/actionTypes';

// initState 若没有声明默认值，则组件中需要设置 defaultProps
const initState = fromJS({
  userList: []
});

const reducer = (state = initState, action) => {
  const { type } = action;
  switch (type) {
  case USERLIST_FETCH_SUCCEEDED: {
    const { result: { data } } = action;
    return state.set('userList', data.data);
  }
  case USERLIST_FETCH_FAILED: {
    const { message } = action;
    console.log('USERLIST_FETCH_FAILED action: ', action);
    return state.merge({
      message,
      userList: 'crashed'
    });
  }
  default: return state;
  }
};

export { reducer };
