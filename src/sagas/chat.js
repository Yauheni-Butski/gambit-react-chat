import { takeEvery, put, call } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import actions from '../actions';

import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import { tokenUrl, instanceLocator } from '../constants/ChatKitConfig';

function connectToChatServerChannel(chatManager, roomId){
    return eventChannel(emit => {

        chatManager.connect()
        .then(currentUser => {
            emit(actions.users.updateCurrentUser(currentUser));

            if (!roomId){
                emit(actions.rooms.fetchRoomList());
            }
            else {
                emit(actions.rooms.enterToRoom(roomId));
            }

            emit(END);
        })
        .catch(err => console.log('error on connecting: ', err));

        const unsubscribe = () => {}
        return unsubscribe;
    });
}

function* onChannelEmit(action){
    yield put(action);
}

function* connectToChatServer(action){

    const chatManager = new ChatManager({
        instanceLocator,
        userId: action.payload.userName,
        tokenProvider: new TokenProvider({
            url: tokenUrl
        })
    });

    const chan = yield call(connectToChatServerChannel, chatManager, action.payload.roomId);
    yield takeEvery(chan, onChannelEmit);
}

const chatSaga = function* () {
    yield takeEvery(actions.chatServer.connectToChatServer, connectToChatServer);
}

export default chatSaga;