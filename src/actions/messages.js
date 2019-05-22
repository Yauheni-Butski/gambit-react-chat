import { createActions } from 'redux-actions';

const { messageReceived, newMessage, clearMessages } = createActions(
    {
        MESSAGE_RECEIVED: (senderId, text) => ({
            senderId,
            text
        }),
        NEW_MESSAGE: message => ({ message }),
        CLEAR_MESSAGES: undefined, //payload creator is the identity. (I think this style is better then passing 'USER_LOGOUT' as the second parameter in 'createActions')
    }
);

const messageActions = {
    messageReceived,
    newMessage,
    clearMessages
};

export default messageActions;