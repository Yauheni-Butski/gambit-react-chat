import { combineReducers } from "redux";
import messagesReducer from "./messages";
import usersReducer from "./users";
import roomsReducer from "./rooms";
import currenUserReducer from "./currentUser";
import currentRoomReducer from "./currentRoom";
import loginReducer from "./login";

const chatReducers = combineReducers({
    loginState: loginReducer,
    messagesState: messagesReducer,
    usersState: usersReducer,
    roomsState: roomsReducer,
    currentUserState: currenUserReducer,
    currentRoomState: currentRoomReducer
});

export default chatReducers;