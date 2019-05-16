import * as types from '../constants/ActionTypes';

const INIT_DATA = {
    joinableRooms: [],
    joinedRooms: []
}

const roomsReducers = (state = INIT_DATA, action) => {
    switch (action.type) {
        case types.UPD_ROOM_LIST:
            return Object.assign({}, state, {
                joinableRooms: action.payload.joinableRooms,
                joinedRooms: action.payload.joinedRooms
            })
        case types.USER_LOGOUT:
            return state = INIT_DATA;
        default:
            return state;
    }
};

export default roomsReducers;