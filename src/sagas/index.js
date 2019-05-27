import { all } from 'redux-saga/effects';
import roomSaga from './room';
import messageSaga from './message';
import userSaga from './user';
import loginSaga from './login';
import chatServerSaga from './chat';

const chatSaga = function* () {
  yield all([
    loginSaga(),
    chatServerSaga(),
    roomSaga(),
    messageSaga(),
    userSaga()
  ]);
}

export default chatSaga;