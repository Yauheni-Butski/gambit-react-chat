/* import * as types from '../constants/ActionTypes'; */
import { handleActions } from 'redux-actions';
import actions from '../actions';

function getPersistState(){
    var roomId = JSON.parse(localStorage.getItem("roomId")) || undefined;
    return {
        roomId: roomId
    };
}

const currentRoomReducer = handleActions(
    {
        [actions.rooms.updateCurrentRoomId]: (state, action) => {
            return Object.assign({}, state, {
                joinableRooms: action.payload.joinableRooms,
                joinedRooms: action.payload.joinedRooms
            })
        },

        [actions.login.userLogout]: (state) => {
            localStorage.setItem("userName", null);
            return state = Object.assign({}, state, { roomId: undefined });
        }
    },
    getPersistState()
);

/* const currentRoomReducer = (state = getPersistState(), action) => {
    switch (action.type) {
        case types.UPD_CURR_ROOM_ID:
            localStorage.setItem("roomId", JSON.stringify(action.payload.roomId));
            return state = Object.assign({}, state, { roomId: action.payload.roomId });
        case types.USER_LOGOUT:
            localStorage.setItem("userName", null);
            return state = Object.assign({}, state, { roomId: undefined });
        default:
            return state;
    }
}; */

export default currentRoomReducer;