import { all } from 'redux-saga/effects';
import roomSaga from './room';
import messageSaga from './message';
import userSaga from './user';

const chatSaga = function* () {
  yield all([
    roomSaga(),
    messageSaga(),
    userSaga()
  ]);
}

export default chatSaga;