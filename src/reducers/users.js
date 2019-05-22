import { handleActions } from 'redux-actions';
import actions from '../actions';

const usersReducers = handleActions(
    {
        [actions.rooms.updateRoomUserStatus]: (state, action) => {
            let goToOnline = action.payload.onlineStatus === "online";
            let userExistInRoom = state.find(user => user.id === action.payload.user.id);

            if(goToOnline){
                return state.concat([{...action.user}]);
            }
            else if(userExistInRoom){
                return state.filter(el => {
                    return el.id !== action.user.id;
                });
            }
            
            return state;
        },

        [actions.rooms.updateRoomOnlineUsers]: (state, action) => {
            return state = action.payload.roomOnlineUsers;
        },//we set the full list of users when enter to new room, so I can set new array directly

        [actions.login.userLogout]: () => []
    },
    []
);

export default usersReducers;