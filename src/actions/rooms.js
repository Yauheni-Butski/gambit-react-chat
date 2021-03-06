import { createActions } from 'redux-actions';

export default createActions(
    {
        UPDATE_ROOM_ONLINE_USERS: (roomOnlineUsers) => ({ roomOnlineUsers }),
        UPDATE_ROOM_USER_STATUS: (user, onlineStatus ) => ({
            user,
            onlineStatus
        }),
        ENTER_TO_ROOM: (roomId) => ({ roomId }),
        UPDATE_CURRENT_ROOM_ID: (roomId) => ({ roomId: roomId }),
        UPDATE_ROOM_LIST: (joinableRooms, joinedRooms) => ({ joinableRooms, joinedRooms }),
        FETCH_ROOM_LIST: undefined
    }
);