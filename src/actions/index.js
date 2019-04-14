import * as types from '../constants/ActionTypes';

let nextUserId = 0;
/* OLD. DELETE */
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