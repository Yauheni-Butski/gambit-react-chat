import * as types from '../constants/ActionTypes';

const clearMessages = () => ({
    type: types.CLEAR_MESSAGES
});

const messageReceived = (senderId, text) => ({
    type: types.MESSAGE_RECEIVED,
    payload: {
        senderId,
        text
    }
});
//saga
const newMessage = (message) => ({
    type: types.NEW_MESSAGE,
    payload: {
        message
    }
});

const messageActions = {
    clearMessages,
    messageReceived,
    newMessage
};

export default messageActions;