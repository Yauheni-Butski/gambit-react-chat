import { takeEvery, select, put, call } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import * as types from '../constants/ActionTypes';
import { clearMessages, updateRoomList, updateCurrentRoom, fetchRoomList, newMessage} from '../actions/index';

function enterToRoomChannel(currentUser, action){
  return eventChannel(emit => {

    currentUser.subscribeToRoomMultipart({
      roomId: action.roomId,
      messageLimit: 20,
      hooks: {
        onMessage: (message) => {
          emit(newMessage(message));
        }
      }
    })
    .then(room => {
      emit(updateCurrentRoom(room));
      emit(fetchRoomList());
    });

    const unsubscribe = () => {
      currentUser.roomSubscriptions[action.roomId].cancel();
    }

    return unsubscribe;
  }); 
}

function fetchRoomListChannel(currentUser){
  return eventChannel(emit => {
    currentUser.getJoinableRooms()
    .then(joinableRooms => {
      let joinedRooms = currentUser.rooms;

      emit(updateRoomList(joinableRooms, joinedRooms))
      emit(END);
    })
    .catch(err => console.log('error on joinableRooms: ', err));

    const unsubscribe = () => {}
    return unsubscribe;
  });
}

function* onEnterRoomChannelEmit(action){
  switch(action.type){
    case types.UPD_CURR_ROOM:
      yield put(updateCurrentRoom(action.currentRoom));
      break;
    case types.FETCH_ROOM_LIST:
      yield put(fetchRoomList(action.currentUser));
      break;
    case types.NEW_MESSAGE:
      yield put(newMessage(action.message));
      break;
    default:
      break;
  }
}

function* onFetchRoomListmChannelEmit(action){
  yield put(updateRoomList(action.joinableRooms, action.joinedRooms));
}

function* enterToRoom(action){
  const currentUser = yield select(state => state.currentUserState);
  yield put(clearMessages());

  const chan = yield call(enterToRoomChannel, currentUser, action);
  yield takeEvery(chan, onEnterRoomChannelEmit);
}

function* refreshRoomList(action){
    const currentUser = yield select(state => state.currentUserState);

    const chan = yield call(fetchRoomListChannel, currentUser);
    yield takeEvery(chan, onFetchRoomListmChannelEmit);
}

const roomSaga = function* () {
    yield takeEvery(types.ENTER_TO_ROOM, enterToRoom);
    yield takeEvery(types.FETCH_ROOM_LIST, refreshRoomList);
}

export default roomSaga;
