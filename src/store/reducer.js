/*
 * @Author: lcs
 * @Date: 2019-02-13 10:49:47
 * @Last Modified by: lcs
 * @Last Modified time: 2019-02-13 16:49:47
 * @Description: Store => Reducer
 */

const defaultState = {
  hasBkColor: false
};

export default (state = defaultState, action) => {
  if (action.type === 'Toggle_Home_Bk') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.hasBkColor = !action.bool;
    return newState;
  }
  return state;
};
