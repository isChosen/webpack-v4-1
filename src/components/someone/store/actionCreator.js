/*
 * @Author: liangchaoshun
 * @Date: 2019-02-14 15:06:59
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-15 15:14:58
 * @Description: Someone ActionCreator
 */

import * as ActionConstants from './actionTypes';

export const toggleSelfBk = bool => ({
  type: ActionConstants.TOGGLE_SELF_BK,
  bool
});
export const toggleParentBk = bool => ({
  type: ActionConstants.TOGGLE_PARENT_BK,
  bool
});
