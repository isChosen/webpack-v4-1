/*
 * @Author: Detcx
 * @Date: 2019-02-14 15:06:59
 * @Last Modified by: Detcx
 * @Last Modified time: 2019-02-16 15:36:17
 * @Description: ProductA ActionCreator
 */

import { USER_FETCH_REQUEST } from '__StorePath__/actionTypes';

export const fetchGithubUser = () => ({ type: USER_FETCH_REQUEST });
