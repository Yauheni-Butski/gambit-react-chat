import * as types from '../constants/ActionTypes';
/* import { createActions } from 'redux-actions';

const { updateRoomOnlineUsers, updateRoomUserStatus, enterToRoom, updateCurrentRoomId, updateRoomList ,fetchRoomList } = createActions(
    {
        UPD_ROOM_ONL_USERS: (roomOnlineUsers) => ({ roomOnlineUsers }),
        UPD_ROOM_USER_STATUS: (user, onlineStatus ) => ({
            user,
            onlineStatus
        }),
        ENTER_TO_ROOM: (roomId) => ({ roomId }),
        UPD_CURR_ROOM_ID: (roomId) => ({ roomId: roomId }),
        UPD_ROOM_LIST: (joinableRooms, joinedRooms) => ({ joinableRooms, joinedRooms }),
        FETCH_ROOM_LIST: undefined
    }
); */

const updateRoomOnlineUsers = (roomOnlineUsers) => ({
    type: types.UPD_ROOM_ONL_USERS,
    payload: {
        roomOnlineUsers
    }
});
const updateRoomUserStatus = (user, onlineStatus ) => ({
    type: types.UPD_ROOM_USER_STATUS,
    payload: {
        user,
        onlineStatus
    }
});
//saga
const enterToRoom = roomId => ({
    type: types.ENTER_TO_ROOM,
    payload: {
        roomId
    }
});

const updateCurrentRoomId = roomId => ({
    type: types.UPD_CURR_ROOM_ID,
    payload: {
        roomId
    }
});
//saga
const fetchRoomList = () => ({
    type: types.FETCH_ROOM_LIST
});

const updateRoomList = (joinableRooms, joinedRooms) => ({
    type: types.UPD_ROOM_LIST,
    payload: {
        joinableRooms,
        joinedRooms
    }
});

const roomActions = {
    updateRoomOnlineUsers,
    updateRoomUserStatus,
    enterToRoom,
    updateCurrentRoomId,
    fetchRoomList,
    updateRoomList
};

export default roomActions;