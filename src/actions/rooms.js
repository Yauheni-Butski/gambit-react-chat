import * as types from '../constants/ActionTypes';

const updateRoomOnlineUsers = (roomOnlineUsers) => ({
    type: types.UPD_ROOM_ONL_USERS,
    roomOnlineUsers
});
const updateRoomUserStatus = (user, onlineStatus ) => ({
    type: types.UPD_ROOM_USER_STATUS,
    user,
    onlineStatus
});
//saga
const enterToRoom = roomId => ({
    type: types.ENTER_TO_ROOM,
    roomId
});

const updateCurrentRoomId = roomId => ({
    type: types.UPD_CURR_ROOM_ID,
    roomId
});
//saga
const fetchRoomList = () => ({
    type: types.FETCH_ROOM_LIST
});

const updateRoomList = (joinableRooms, joinedRooms) => ({
    type: types.UPD_ROOM_LIST,
    joinableRooms,
    joinedRooms
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