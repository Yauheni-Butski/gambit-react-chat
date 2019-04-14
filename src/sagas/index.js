import { all } from 'redux-saga/effects';
import roomSaga from './room';
import messageSaga from './message';

const chatSaga = function* () {
  yield all([
    roomSaga(),
    messageSaga()
  ]);
}

export default chatSaga;