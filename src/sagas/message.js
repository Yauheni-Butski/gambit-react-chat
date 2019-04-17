import { takeEvery, select, put } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';
import { messageReceived } from '../actions';

function* onNewMessageReceived(action){
    var message = action.message;
    const currentRoomId = yield select(state => state.currentRoomState.roomId);

    if(currentRoomId === undefined || message.roomId === currentRoomId){
      for (let i=0; i < message.parts.length; i++){
        let messagePart = message.parts[i];
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
        
        yield put(messageReceived(message.senderId, text));
      }
    }
}

const messageSaga = function* () {
    yield takeEvery(types.NEW_MESSAGE, onNewMessageReceived);
}

export default messageSaga;