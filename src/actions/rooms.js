import { /* createActions, */ createAction } from 'redux-actions';

/* const { updateRoomOnlineUsers, updateRoomUserStatus, enterToRoom, updateCurrentRoomId, updateRoomList ,fetchRoomList } = createActions(
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

//==========================================================
const updateRoomOnlineUsers = createAction('UPD_ROOM_ONL_USERS', (roomOnlineUsers) => ({ roomOnlineUsers }));
const updateRoomUserStatus = createAction('UPD_ROOM_USER_STATUS', (user, onlineStatus ) => ({
    user,
    onlineStatus
}))
const enterToRoom = createAction('ENTER_TO_ROOM', (roomId) => ({ roomId }));
const updateCurrentRoomId = createAction('UPD_CURR_ROOM_ID', (roomId) => ({ roomId: roomId }));
const updateRoomList = createAction('UPD_ROOM_LIST', (joinableRooms, joinedRooms) => ({ joinableRooms, joinedRooms }));
const fetchRoomList = createAction('FETCH_ROOM_LIST');

const roomActions = {
    updateRoomOnlineUsers,
    updateRoomUserStatus,
    enterToRoom,
    updateCurrentRoomId,
    fetchRoomList,
    updateRoomList
};

export default roomActions;