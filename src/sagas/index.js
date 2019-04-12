import { takeEvery, select, put } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';
import { messageReceived, clearMessages, updateRoomList, updateCurrentRoom } from '../actions/index';
//import roomSaga from './room'


function* enterToRoom(action){
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
              /* TODO. Channel */put(messageReceived(message.senderId, text));
            });
          }
        }
      })
      //3. Update room list
      .then(room => {
        /* TODO. Channel */put(updateCurrentRoom(room));
        console.log('Saga. Then. UpdateCurrentRoom');
        //after we subscribe to room, our collections 'joinableRooms' and 'joinedRooms' will changed
        //one room from 'joinable' goes to 'joined'. So we should update our state
        currentUser.getJoinableRooms()
        .then(joinableRooms => {
          let joinedRooms = currentUser.rooms;
          /* TODO. Channel */put(updateRoomList(joinableRooms, joinedRooms))
        })
        .catch(err => console.log('error on joinableRooms: ', err));
    })
}

const chatSaga = function* () {
    yield takeEvery(types.ENTER_TO_ROOM, enterToRoom)
}

export default chatSaga;