import * as types from '../constants/ActionTypes';

const usersReducers = (state = [], action) => {
    switch (action.type) {
        case types.USER_ONL_ST_CHANGED:
            let goToOnline = action.state.current === "online";
            if(goToOnline){
                return state.concat([{...action.user}]);
            }
            else{
                return state.filter(el => {
                    return el.id !== action.user.id;
                })
            }
        case types.UPD_ROOM_ONL_USERS:
            //we set the full list of users when enter to new room, so I can set new array directly
            return state = action.roomOnlineUsers;
        default:
            return state;
    }
};

export default usersReducers;