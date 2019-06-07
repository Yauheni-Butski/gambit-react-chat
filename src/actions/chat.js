import { createActions } from 'redux-actions';

export default createActions(
    {
        CONNECT_TO_CHAT_SERVER: (userName, roomId) => ({ userName, roomId })
    }
);