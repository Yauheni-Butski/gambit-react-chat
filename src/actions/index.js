import * as types from '../constants/ActionTypes';

let nextMessageId = 0;
let nextUserId = 0;

//you send new message
export const addMessage = (message, author) => ({
    type: types.ADD_MESSAGE,
    id: nextMessageId++,
    message,
    author
});

export const addUser = name => ({
    type: types.ADD_USER,
    id: nextUserId++,
    name
});

//you receive message from someone else
export const messageReceived = (message, author) => ({
    type: types.MESSAGE_RECEIVED,
    id: nextMessageId++,
    message,
    author
});

export const populateUsersList = users => ({
    type: types.USER_LIST,
    users
});