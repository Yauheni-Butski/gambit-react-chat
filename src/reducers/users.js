import * as types from '../constants/ActionTypes';

const usersReducers = (state = [], action) => {
    switch (action.type) {
        case types.UPD_ROOM_USER_STATUS:
            let goToOnline = action.onlineStatus === "online";
            let userExistInRoom = state.find(user => user.id === action.user.id);

            if(goToOnline){
                return state.concat([{...action.user}]);
            }
            else if(userExistInRoom){
                return state.filter(el => {
                    return el.id !== action.user.id;
                });
            }
            
            return state;
        case types.UPD_ROOM_ONL_USERS:
            //we set the full list of users when enter to new room, so I can set new array directly
            return state = action.roomOnlineUsers;
        case types.USER_LOGOUT:
            return state = [];
        default:
            return state;
    }
};

export default usersReducers;