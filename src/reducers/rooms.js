import * as types from '../constants/ActionTypes';

const INIT_DATA = {
    joinableRooms: [],
    joinedRooms: []
}

const roomsReducers = (state = INIT_DATA, action) => {
    switch (action.type) {
        case types.UPD_ROOM_LIST:
            return Object.assign({}, state, {
                joinableRooms: action.joinableRooms,
                joinedRooms: action.joinedRooms
            })
        default:
            return state;
    }
};

export default roomsReducers;