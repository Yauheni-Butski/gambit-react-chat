import * as types from '../constants/ActionTypes';

const currentRoomReducer = (state = {}, action) => {
    switch (action.type) {
        case types.UPD_CURR_ROOM:
            //as I need to store the whole object once and will not update their property, I set directly
            return state = action.currentRoom;
        default:
            return state;
    }
};

export default currentRoomReducer;