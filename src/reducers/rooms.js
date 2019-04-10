import * as types from '../constants/ActionTypes';

const DUMMY_DATA = {
    joinableRooms: [],
    joinedRooms: []
}

const roomsReducers = (state = DUMMY_DATA, action) => {
    switch (action.type) {
        case types.UPD_ROOM_LIST:
            return Object.assign({}, state, {
                //TODO. 1. Уточнить как такую структуру правильно биндить
                /* joinableRooms: state.joinableRooms.concat([action.joinableRooms]),
                joinedRooms: state.joinedRooms.concat([action.joinedRooms]) */
                joinableRooms: action.joinableRooms,
                joinedRooms: action.joinedRooms
            })
/*         case types.ADD_ROOM:
            return state.joinableRooms.concat([{
                name: action.name
            }]); */
/*         case types.ROOM_LIST:
            return action.rooms; */
        default:
            return state;
    }
};

export default roomsReducers;