/*
 * @Author: liangchaoshun
 * @Date: 2019-2-22 10:13:16
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-22 10:57:43
 * @Description: Product B ActionCreator
 */

import { USERLIST_FETCH_REQUEST } from '__StorePath__/actionTypes';

export const fetchUserList = (page, rows) => ({
  type: USERLIST_FETCH_REQUEST,
  page,
  rows
});
