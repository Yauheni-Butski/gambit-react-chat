import * as types from '../constants/ActionTypes';

export const clearMessages = () => ({
    type: types.CLEAR_MESSAGES
});

export const messageReceived = (senderId, text) => ({
    type: types.MESSAGE_RECEIVED,
    senderId,
    text
});
//saga
export const newMessage = (message) => ({
    type: types.NEW_MESSAGE,
    message
});

export const loginUserName = (userName) => ({
    type: types.LOGIN_USER_NAME,
    userName
});
//saga
export const fetchUserList = (roomUsers) => ({
    type: types.FETCH_USER_LIST,
    roomUsers
});

export const updateRoomOnlineUsers = (roomOnlineUsers) => ({
    type: types.UPD_ROOM_ONL_USERS,
    roomOnlineUsers
});
//saga
export const userOnlineStateChanged = (state, user, roomId) => ({
    type: types.USER_ONL_ST_CHANGED,
    state,
    user,
    roomId
});

export const userLogout = () => ({
    type: types.USER_LOGOUT
});

export const updateRoomUserStatus = (user, onlineStatus ) => ({
    type: types.UPD_ROOM_USER_STATUS,
    user,
    onlineStatus
})

export const updateCurrentUser = currentUser => ({
    type: types.UPD_CURR_USER,
    currentUser
});
//saga
export const enterToRoom = roomId => ({
    type: types.ENTER_TO_ROOM,
    roomId
})

export const updateCurrentRoomId = roomId => ({
    type: types.UPD_CURR_ROOM_ID,
    roomId
})
//saga
export const fetchRoomList = () => ({
    type: types.FETCH_ROOM_LIST
});

export const updateRoomList = (joinableRooms, joinedRooms) => ({
    type: types.UPD_ROOM_LIST,
    joinableRooms,
    joinedRooms
});