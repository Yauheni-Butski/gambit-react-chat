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

export default roomsReducers;