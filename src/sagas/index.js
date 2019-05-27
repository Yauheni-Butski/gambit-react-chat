import { all } from 'redux-saga/effects';
import roomSaga from './room';
import messageSaga from './message';
import userSaga from './user';
import chatServerSaga from './chat';

const chatSaga = function* () {
  yield all([
    chatServerSaga(),
    roomSaga(),
    messageSaga(),
    userSaga()
  ]);
}

export default chatSaga;