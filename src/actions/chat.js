import { createActions } from 'redux-actions';

const { connectToChatServer } = createActions(
    {
        CONNECT_TO_CHAT_SERVER: (userName, roomId) => ({ userName, roomId })
    }
);

const chatActions = {
    connectToChatServer
};

export default chatActions;