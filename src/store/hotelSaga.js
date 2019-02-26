/*
 * @Author: liangchaoshun
 * @Date: 2019-02-16 09:24:12
 * @Last Modified by: liangchaoshun
 * @Last Modified time: 2019-02-26 20:13:40
 * @Description: Global Saga: 在此文件内处理业务逻辑和数据格式
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request from '__Utils__/request';
import * as actionTypes from './actionTypes';

// 获取 github 用户
function* checkLogged(action) {
  // console.log('checkLogged action: ', action);
  try {
    const result = yield call(request.fetchLoggedStatus);
    yield put({ type: actionTypes.LOGGED_STATUS_SUCCEEDED, result });
  } catch (e) {
    yield put({ type: actionTypes.LOGGED_STATUS_FAILED, message: e.message });
  }
}

// 获取 github 用户
function* fetchUser(action) {
  // console.log('fetchUser action: ', action);
  try {
    const user = yield call(request.fetchUser);
    yield put({ type: actionTypes.USER_FETCH_SUCCEEDED, user });
  } catch (e) {
    yield put({ type: actionTypes.USER_FETCH_FAILED, message: e.message });
  }
}

// 获取随机数
function* fetchRandom(action) {
  // console.log('fetchRandom action: ', action);
  try {
    const result = yield call(request.fetchRandom);
    yield put({ type: actionTypes.RANDOM_FETCH_SUCCEEDED, result });
  } catch (e) {
    yield put({ type: actionTypes.RANDOM_FETCH_FAILED, message: e.message });
  }
}

// 获取用户列表
function* fetchUserList(action) {
  // console.log('fetchUserList action: ', action);
  const { page, rows } = action;
  try {
    const result = yield call(request.fetchUserList, page, rows);
    yield put({ type: actionTypes.USERLIST_FETCH_SUCCEEDED, result });
  } catch (e) {
    yield put({ type: actionTypes.USERLIST_FETCH_FAILED, message: e.message });
  }
}

/**
 * @Description: 分配任务 Generator
 */
function* hotelSaga() {
  yield takeLatest(actionTypes.CHECK_LOGINED_STATUS, checkLogged);
  yield takeLatest(actionTypes.RANDOM_FETCH_REQUEST, fetchRandom);
  yield takeLatest(actionTypes.USER_FETCH_REQUEST, fetchUser);
  yield takeLatest(actionTypes.USERLIST_FETCH_REQUEST, fetchUserList);
}

export default hotelSaga;
