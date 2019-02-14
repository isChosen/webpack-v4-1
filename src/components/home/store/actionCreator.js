/*
 * @Author: lcs
 * @Date: 2019-02-14 15:06:59
 * @Last Modified by: lcs
 * @Last Modified time: 2019-02-14 16:47:34
 * @Description: Home ActionCreator
 */

import * as ActionConstants from './actionTypes';

export const toggleBkColor = bool => ({
  type: ActionConstants.TOGGLE_HOME_BK,
  bool
});
