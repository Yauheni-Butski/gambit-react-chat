/* import * as types from '../constants/ActionTypes'; */
import { /* createActions, */ createAction } from 'redux-actions';

/* const { messageReceived, newMessage, clearMessages } = createActions(
    {
        MESSAGE_RECEIVED: (senderId, text) => ({
            senderId,
            text
        }),
        NEW_MESSAGE: message => ({ message }),
        CLEAR_MESSAGES: undefined, //payload creator is the identity. (I think this style is better then passing 'USER_LOGOUT' as the second parameter in 'createActions')
    }
); */

//==============================================

const messageReceived = createAction('MESSAGE_RECEIVED', (senderId, text) => ({
    senderId,
    text
}));
const newMessage = createAction('NEW_MESSAGE', message => ({ message }))
const clearMessages = createAction('CLEAR_MESSAGES');

/* const clearMessages = () => ({
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
}); */

const messageActions = {
    messageReceived,
    newMessage,
    clearMessages
};

export default messageActions;