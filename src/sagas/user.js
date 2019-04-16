import { takeEvery, put, select } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';
import { updateRoomOnlineUsers } from '../actions';

function* fetchRoomUserList(){
    const currentRoom = yield select(state => state.currentRoomState);
    const roomUsers = currentRoom.users;
    const onlineUsers = roomUsers.filter(el => el.presence.state === 'online');

    yield put(updateRoomOnlineUsers(onlineUsers));
}


const userSaga = function* () {
    yield takeEvery(types.FETCH_USER_LIST, fetchRoomUserList);
}

export default userSaga;