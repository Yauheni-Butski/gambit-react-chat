import { takeEvery, select, put, call } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import * as types from '../constants/ActionTypes';
import { messageReceived, clearMessages, updateRoomList, updateCurrentRoom } from '../actions/index';
//import roomSaga from './room'

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
        onMessage: onMessageHandler
      }
    })
    .then(room => {
      emit(updateCurrentRoom(room));
      //after we subscribe to room, our collections 'joinableRooms' and 'joinedRooms' will changed
      //one room from 'joinable' goes to 'joined'. So we should update our state
      currentUser.getJoinableRooms()
      .then(joinableRooms => {
        let joinedRooms = currentUser.rooms;
        emit(updateRoomList(joinableRooms, joinedRooms))
      })
      .catch(err => console.log('error on joinableRooms: ', err));
    });


    const unsubscribe = () => {
      currentUser.roomSubscriptions[action.roomId].cancel();
    }

    return unsubscribe;
  }); 
}


/* function* enterToRoom(action){
    const currentUser = yield select(state => state.currentUserState);
    //1. clear messages in current MessageList
    yield put(clearMessages());

    //2. Subscribe to room
    currentUser.subscribeToRoomMultipart({
        roomId: action.roomId, 
        messageLimit: 20,
        hooks: {
          onMessage: message => {
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
              console.log('Message received');
              put(messageReceived(message.senderId, text)); // TODO. Channel
            });
          }
        }
      })
      //3. Update room list
      .then(room => {
        put(updateCurrentRoom(room));// TODO. Channel
        console.log('Saga. Then. UpdateCurrentRoom');
        //after we subscribe to room, our collections 'joinableRooms' and 'joinedRooms' will changed
        //one room from 'joinable' goes to 'joined'. So we should update our state
        currentUser.getJoinableRooms()
        .then(joinableRooms => {
          let joinedRooms = currentUser.rooms;
          put(updateRoomList(joinableRooms, joinedRooms))// TODO. Channel
        })
        .catch(err => console.log('error on joinableRooms: ', err));
    })
} */

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
  }
}

function* enterToRoom(action){
  const currentUser = yield select(state => state.currentUserState);
  //1. clear messages in current MessageList
  yield put(clearMessages());

  const chan = yield call(enterToRoomChannel, currentUser, action);
  yield takeEvery(chan, onEnterRoomChannelEmit);
}


const chatSaga = function* () {
  yield takeEvery(types.ENTER_TO_ROOM, enterToRoom)
}

export default chatSaga;