import * as types from '../constants/ActionTypes';

let nextUserId = 0;

export const addUser = name => ({
    type: types.ADD_USER,
    id: nextUserId++,
    name
});

export const clearMessages = () => ({
    type: types.CLEAR_MESSAGES
});

//you receive message from someone else
export const messageReceived = (senderId, text) => ({
    type: types.MESSAGE_RECEIVED,
    senderId,
    text
});

export const populateUsersList = users => ({
    type: types.USER_LIST,
    users
});

/* export const addRoom = name => ({
    type: types.ADD_ROOM,
    name
}); */

/* export const populateRoomList = rooms => ({
    type: types.ROOM_LIST,
    rooms
}); */

export const updateCurrentUser = currentUser => ({
    type: types.UPD_CURR_USER,
    currentUser
});

export const updateRoomList = (joinableRooms, joinedRooms) => ({
    type: types.UPD_ROOM_LIST,
    joinableRooms,
    joinedRooms
});