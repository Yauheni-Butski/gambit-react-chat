import * as types from '../constants/ActionTypes';

const INIT_DATA = {
    roomId: undefined
}

const currentRoomReducer = (state = INIT_DATA, action) => {
    switch (action.type) {
        case types.UPD_CURR_ROOM_ID:
            return state = Object.assign({}, state, { roomId: action.roomId });
        case types.USER_LOGOUT:
            return state = Object.assign({}, state, { roomId: undefined });
        default:
            return state;
    }
};

export default currentRoomReducer;