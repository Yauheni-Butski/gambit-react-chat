import { takeEvery, select, put } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';

function* updateCurrentRoom(action){
    const currentUser = yield select(state => state.currentRoomState);
    /* логика обработки */
}

const roomSaga = function* () {
    yield takeEvery(types.UPD_CURR_ROOM, updateCurrentRoom)
}

export default roomSaga;