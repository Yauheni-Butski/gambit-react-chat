import * as types from '../constants/ActionTypes';

function getPersistState(){
    var roomId = JSON.parse(localStorage.getItem("roomId")) || undefined;
    return {
        roomId: roomId
    };
}

const currentRoomReducer = (state = getPersistState(), action) => {
    switch (action.type) {
        case types.UPD_CURR_ROOM_ID:
            localStorage.setItem("roomId", JSON.stringify(action.roomId));
            return state = Object.assign({}, state, { roomId: action.roomId });
        case types.USER_LOGOUT:
            localStorage.setItem("userName", null);
            return state = Object.assign({}, state, { roomId: undefined });
        default:
            return state;
    }
};

export default currentRoomReducer;