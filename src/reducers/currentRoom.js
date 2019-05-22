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
            return Object.assign({}, state, { roomId: action.payload.roomId });
        },

        [actions.login.userLogout]: (state) => {
            localStorage.setItem("userName", null);
            return state = Object.assign({}, state, { roomId: undefined });
        }
    },
    getPersistState()
);

export default currentRoomReducer;