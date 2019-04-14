import * as types from '../constants/ActionTypes';

const usersReducers = (state = [], action) => {
    switch (action.type) {
/*         case types.ADD_USER:
            return state.concat([{
                name: action.name,
                id: action.id
            }]); */
        case types.UPD_ROOM_ONL_USERS:
            //we set the full list of users when enter to new room, so I can set new array directly
            return state = action.roomOnlineUsers;
        default:
            return state;
    }
};

export default usersReducers;