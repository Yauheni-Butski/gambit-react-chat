import { all } from 'redux-saga/effects';
import roomSaga from './room'

const chatSaga = function* () {
  yield all([
    roomSaga()
  ]);
}

export default chatSaga;