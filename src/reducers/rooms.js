/* import * as types from '../constants/ActionTypes'; */
import { handleActions } from 'redux-actions';
import actions from '../actions';

const INIT_DATA = {
    joinableRooms: [],
    joinedRooms: []
}

const roomsReducers = handleActions(
    {
        [actions.rooms.updateRoomList]: (state, action) => {
            return Object.assign({}, state, {
                joinableRooms: action.payload.joinableRooms,
                joinedRooms: action.payload.joinedRooms
            })
        },

        [actions.login.userLogout]: () => (INIT_DATA)
    },
    INIT_DATA
);

/* const roomsReducers = (state = INIT_DATA, action) => {
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
}; */

export default roomsReducers;