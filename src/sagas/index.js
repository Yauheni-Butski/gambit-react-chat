import { takeEvery } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';

const handleNewMessage = function* handleNewMessage(params) {
    //take every action of 'Add_Message' and send it to the socket,
    //passing action and some details
    yield takeEvery(types.ADD_MESSAGE, (action) => {
        action.author = params.userName
        params.socket.send(JSON.stringify(action))
    })
}

export default handleNewMessage;