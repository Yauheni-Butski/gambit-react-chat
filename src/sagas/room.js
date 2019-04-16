import { takeEvery, select, put, call } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import * as types from '../constants/ActionTypes';
import { clearMessages, updateRoomList, updateCurrentRoom, fetchRoomList, newMessage, fetchUserList, userOnlineStateChanged} from '../actions';

//TODO. Тут не нужен объект currentRoom
function enterToRoomChannel(currentUser, currentRoom, action){
  return eventChannel(emit => {
    //unsubscribe from prev room doesn't work...so I will filter incoming events by active roomId
    //if exist curr. room ... currentUser.roomSubscriptions[currentRoom.id].cancel()
    currentUser.subscribeToRoomMultipart({
      roomId: action.roomId,
      messageLimit: 20,
      hooks: {
        onMessage: (message) => {
            emit(newMessage(message));
        },
        onPresenceChanged: (state, user) => {
          //TODO. Тоже пока не корректно работает
          if (currentRoom.id === undefined || currentRoom.id === action.roomId){
            emit(userOnlineStateChanged(state, user));
          }
          else{
            console.log('Состояние не прошло');
            console.log('Current room id', currentRoom.id);
            console.log('Action room id', action.roomId);
          }
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

function* onChannelEmit(action){
  yield put(action);
}

function* enterToRoom(action){
  const currentUser = yield select(state => state.currentUserState);
  const currentRoom = yield select(state => state.currentRoomState);//TODO. Тут не нужно
  yield put(clearMessages());

  //TODO. Мы должны сначала сразу установить currentRoomId = action.roomId,
  //затем уже подключаться, так как при подключении сразу пойдут сообщения
  //и потом уже установить объект currentRoom
  const chan = yield call(enterToRoomChannel, currentUser, currentRoom, action);
  yield takeEvery(chan, onChannelEmit);
}

function* refreshRoomList(){
    const currentUser = yield select(state => state.currentUserState);

    const chan = yield call(fetchRoomListChannel, currentUser);
    yield takeEvery(chan, onChannelEmit);
}

const roomSaga = function* () {
    yield takeEvery(types.ENTER_TO_ROOM, enterToRoom);
    yield takeEvery(types.FETCH_ROOM_LIST, refreshRoomList);
}

export default roomSaga;
