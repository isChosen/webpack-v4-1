/*
 * @Author: Detcx
 * @Date: 2019-2-26 17:05:05
 * @Last Modified by: Detcx
 * @Last Modified time: 2019-02-26 19:59:52
 * @Description: ResponseInterceptor ActionCreator
 */

import { GOTO_LOGIN } from '__StorePath__/actionTypes';

export const redirectToLogin = (isGotoLogin, showReLoginModal) => ({
  type: GOTO_LOGIN,
  isGotoLogin,
  showReLoginModal
});
