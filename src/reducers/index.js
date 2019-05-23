import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import messagesReducer from "./messages";
import usersReducer from "./users";
import roomsReducer from "./rooms";
import currenUserReducer from "./currentUser";
import currentRoomReducer from "./currentRoom";
import loginReducer from "./login";

const chatReducers = (history) => combineReducers({
    router: connectRouter(history),
    loginState: loginReducer,
    messagesState: messagesReducer,
    usersState: usersReducer,
    roomsState: roomsReducer,
    currentUserState: currenUserReducer,
    currentRoomState: currentRoomReducer
});

export default chatReducers;