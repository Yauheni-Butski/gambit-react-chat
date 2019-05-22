import { takeEvery, put, select } from 'redux-saga/effects';
import actions from '../actions';

function* fetchRoomUserList(action){
    const onlineUsers = action.payload.roomUsers.filter(el => el.presence.state === 'online');
    yield put(actions.rooms.updateRoomOnlineUsers(onlineUsers));
}

function* handleUserOnlineStatus(action){
    const currentRoomId = yield select(state => state.currentRoomState.roomId);
    if (action.roomId === currentRoomId){
        yield put(actions.rooms.updateRoomUserStatus(action.payload.user, action.payload.state.current))
    }
}

const userSaga = function* () {
    yield takeEvery(actions.users.fetchUserList, fetchRoomUserList);
    yield takeEvery(actions.users.userOnlineStateChanged, handleUserOnlineStatus);
}

export default userSaga;