/*
 * @Author: liangchaoshun
 * @Date: 2019-02-14 15:06:59
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-15 11:17:00
 * @Description: Home ActionCreator
 */

import axios from '__Utils__/http';
import * as ActionConstants from './actionTypes';

export const toggleBkColor = bool => ({
  type: ActionConstants.TOGGLE_HOME_BK,
  bool
});

export const getRandomNum = () => (
  dispatch => {
    axios.get('/mock/getRandom')
      .then(result => {
        const { data: { data } } = result;
        // console.log('getRandom result: ', result);
        const action = {
          type: ActionConstants.GET_RANDOM_NUMBER,
          random: data
        };
        dispatch(action);
      }).catch(reason => {
        console.log('getRandom error reason: ', reason);
      });
  }
);
