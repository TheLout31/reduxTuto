/* eslint-disable prettier/prettier */
import {put, takeEvery} from 'redux-saga/effects';
import {SET_USER_DATA, USER_LIST} from './constants';

function* userList() {
  try {
    let url = 'https://jsonplaceholder.typicode.com/todos';
    let data = yield fetch(url);
    data = yield data.json();
    console.warn(data);
    // put({type: SET_USER_DATA, data});
  } catch (error) {
    console.warn(error);
  }
}

function* SagaData() {
  yield takeEvery(USER_LIST, userList);
}
export default SagaData;
