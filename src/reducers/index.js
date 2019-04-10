import { combineReducers } from "redux";
import messagesReducer from "./messages";
import usersReducer from "./users";
import roomsReducer from "./rooms";
import currenUserReducer from "./currentUser";

const chatReducers = combineReducers({
    messagesState: messagesReducer,
    usersState: usersReducer,
    roomsState: roomsReducer,
    currentUserState: currenUserReducer
});

export default chatReducers;