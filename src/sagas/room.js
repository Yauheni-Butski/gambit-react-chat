import { takeEvery, select, put, call } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import * as types from '../constants/ActionTypes';
import { clearMessages, updateRoomList, updateCurrentRoom, fetchRoomList, newMessage, fetchUserList, userOnlineStateChanged} from '../actions/index';

function enterToRoomChannel(currentUser, action){
  return eventChannel(emit => {

    currentUser.subscribeToRoomMultipart({
      roomId: action.roomId,
      messageLimit: 20,
      hooks: {
        onMessage: (message) => {
          emit(newMessage(message));
        },
        //TODO. onUserJoined
        //TODO. onUserLeft
        onPresenceChanged: (state, user) => {
          emit(userOnlineStateChanged(state, user));
        }
      }
    })
    .then(room => {
      emit(updateCurrentRoom(room));
      emit(fetchRoomList());
      emit(fetchUserList());
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
      yield put(fetchRoomList());
      break;
    case types.NEW_MESSAGE:
      yield put(newMessage(action.message));
      break;
    case types.FETCH_USER_LIST:
      yield put(fetchUserList());
      break;
    case types.USER_ONL_ST_CHANGED:
      yield put(userOnlineStateChanged(action.state, action.user));
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

function* refreshRoomList(){
    const currentUser = yield select(state => state.currentUserState);

    const chan = yield call(fetchRoomListChannel, currentUser);
    yield takeEvery(chan, onFetchRoomListmChannelEmit);
}

const roomSaga = function* () {
    yield takeEvery(types.ENTER_TO_ROOM, enterToRoom);
    yield takeEvery(types.FETCH_ROOM_LIST, refreshRoomList);
}

export default roomSaga;
