/*
 * @Author: Detcx
 * @Date: 2019-02-14 15:06:59
 * @Last Modified by: Detcx
 * @Last Modified time: 2019-02-16 15:31:08
 * @Description: Home ActionCreator
 */

import { TOGGLE_HOME_BK, RANDOM_FETCH_REQUEST } from '__StorePath__/actionTypes';

export const toggleBkColor = bool => ({
  type: TOGGLE_HOME_BK,
  bool
});

export const getRandomNum = () => ({ type: RANDOM_FETCH_REQUEST });
