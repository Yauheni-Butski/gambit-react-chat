import { takeEvery, select, put, call } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import * as types from '../constants/ActionTypes';
import { messageReceived, clearMessages, updateRoomList, updateCurrentRoom, fetchRoomList} from '../actions/index';

function enterToRoomChannel(currentUser, action){
  return eventChannel(emit => {

    const onMessageHandler = (message) => {
      message.parts.forEach(messagePart => {
        //TODO. 3. Всё передаём в Reducer или в State. View логика уже должна будет сама решать как что отрисовывать
        //TODO. Обрабатывать 3 типа сообщения
        //TODO. https://docs.pusher.com/chatkit/reference/javascript#messages
        let text = '';
        switch(messagePart.partType){
          case "url":
            text = messagePart.payload.url;
            break;
          case "attachment":
            // temporary send only name
            text = messagePart.payload.name;
            break;
          case "inline":
          default:
            text = messagePart.payload.content;
            break;
        }
        emit(messageReceived(message.senderId, text));
      });
    };

    currentUser.subscribeToRoomMultipart({
      roomId: action.roomId,
      messageLimit: 20,
      hooks: {
        onMessage: onMessageHandler //TODO. 1. Mожет вынести в message Saga и тут в обработчике делать Emit
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
    case types.MESSAGE_RECEIVED:
      yield put(messageReceived(action.senderId, action.text));
      break;
    case types.UPD_CURR_ROOM:
      yield put(updateCurrentRoom(action.currentRoom));
      break;
    case types.UPD_ROOM_LIST:
      yield put(updateRoomList(action.joinableRooms, action.joinedRooms));
      break;
    case types.FETCH_ROOM_LIST:
      yield put(fetchRoomList(action.currentUser));
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
