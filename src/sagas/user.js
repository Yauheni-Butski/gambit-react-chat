import { takeEvery, put, select } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';
import { updateRoomOnlineUsers, updateRoomUserStatus } from '../actions';

function* fetchRoomUserList(action){
    const onlineUsers = action.roomUsers.filter(el => el.presence.state === 'online');
    yield put(updateRoomOnlineUsers(onlineUsers));
}

function* handleUserOnlineStatus(action){
    const currentRoomId = yield select(state => state.currentRoomState.roomId);
    if (action.roomId === currentRoomId){
        yield put(updateRoomUserStatus(action.user, action.state.current))
    }
}

const userSaga = function* () {
    yield takeEvery(types.FETCH_USER_LIST, fetchRoomUserList);
    yield takeEvery(types.USER_ONL_ST_CHANGED, handleUserOnlineStatus)
}

export default userSaga;