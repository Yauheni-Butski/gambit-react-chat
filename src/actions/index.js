import * as types from '../constants/ActionTypes';

export const clearMessages = () => ({
    type: types.CLEAR_MESSAGES
});

//you receive message from someone else
export const messageReceived = (senderId, text) => ({
    type: types.MESSAGE_RECEIVED,
    senderId,
    text
});

export const newMessage = (message) => ({
    type: types.NEW_MESSAGE,
    message
});

export const fetchUserList = () => ({
    type: types.FETCH_USER_LIST
});

export const updateRoomOnlineUsers = (roomOnlineUsers) => ({
    type: types.UPD_ROOM_ONL_USERS,
    roomOnlineUsers
});

export const updateCurrentUser = currentUser => ({
    type: types.UPD_CURR_USER,
    currentUser
});

export const enterToRoom = roomId => ({
    type: types.ENTER_TO_ROOM,
    roomId
})

export const updateCurrentRoom = currentRoom => ({
    type: types.UPD_CURR_ROOM,
    currentRoom
});

export const fetchRoomList = () => ({
    type: types.FETCH_ROOM_LIST
});

export const updateRoomList = (joinableRooms, joinedRooms) => ({
    type: types.UPD_ROOM_LIST,
    joinableRooms,
    joinedRooms
});