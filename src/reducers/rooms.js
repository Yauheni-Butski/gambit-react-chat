import * as types from '../constants/ActionTypes';

const INIT_DATA = {
    joinableRooms: [],
    joinedRooms: []
}

const roomsReducers = (state = INIT_DATA, action) => {
    switch (action.type) {
        case types.UPD_ROOM_LIST:
            return Object.assign({}, state, {
                //TODO. 1. Уточнить как такую структуру правильно биндить
                /* joinableRooms: state.joinableRooms.concat([action.joinableRooms]),
                joinedRooms: state.joinedRooms.concat([action.joinedRooms]) */
                joinableRooms: action.joinableRooms,
                joinedRooms: action.joinedRooms
            })
        default:
            return state;
    }
};

export default roomsReducers;