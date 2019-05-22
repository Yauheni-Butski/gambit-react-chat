import { takeEvery, select, put, call } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';

import actions from '../actions';


function enterToRoomChannel(currentUser, action){
  return eventChannel(emit => {
    //unsubscribe from prev room doesn't work...so I will filter incoming events by active roomId
    //if exist curr. room ... currentUser.roomSubscriptions[currentRoom.id].cancel()
    currentUser.subscribeToRoomMultipart({
      roomId: action.payload.roomId,
      messageLimit: 20,
      hooks: {
        onMessage: (message) => {
            emit(actions.messages.newMessage(message));
        },
        onPresenceChanged: (state, user) => {
            emit(actions.users.userOnlineStateChanged(state, user, action.payload.roomId));
        }
      }
    })
    .then(room => {
      emit(actions.rooms.fetchRoomList());
      emit(actions.users.fetchUserList(room.users));
    });

    const unsubscribe = () => {
      currentUser.roomSubscriptions[action.payload.roomId].cancel();
    }

    return unsubscribe;
  });
}

function fetchRoomListChannel(currentUser){
  return eventChannel(emit => {
    currentUser.getJoinableRooms()
    .then(joinableRooms => {
      let joinedRooms = currentUser.rooms;

      emit(actions.rooms.updateRoomList(joinableRooms, joinedRooms))
      emit(END);
    })
    .catch(err => console.log('error on joinableRooms: ', err));

    const unsubscribe = () => {}
    return unsubscribe;
  });
}

function* onChannelEmit(action){
  yield put(action);
}

function* enterToRoom(action){
  const currentUser = yield select(state => state.currentUserState);
  yield put(actions.messages.clearMessages());
  yield put(actions.rooms.updateCurrentRoomId(action.payload.roomId));

  const chan = yield call(enterToRoomChannel, currentUser, action);
  yield takeEvery(chan, onChannelEmit);
}

function* refreshRoomList(){
    const currentUser = yield select(state => state.currentUserState);

    const chan = yield call(fetchRoomListChannel, currentUser);
    yield takeEvery(chan, onChannelEmit);
}

const roomSaga = function* () {
    yield takeEvery(actions.rooms.enterToRoom, enterToRoom);
    yield takeEvery(actions.rooms.fetchRoomList, refreshRoomList);
}

export default roomSaga;
