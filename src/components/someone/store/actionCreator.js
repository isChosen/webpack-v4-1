/*
 * @Author: liangchaoshun
 * @Date: 2019-02-14 15:06:59
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-16 15:45:49
 * @Description: Someone ActionCreator
 */

import { TOGGLE_SOMEONE_BK, TOGGLE_HOME_BK } from '__StorePath__/actionTypes';

export const toggleSelfBk = bool => ({
  type: TOGGLE_SOMEONE_BK,
  bool
});
export const toggleParentBk = bool => ({
  type: TOGGLE_HOME_BK,
  bool
});
