import { combineReducers } from "redux";
import messagesReducer from "./messages";
import usersReducer from "./users";
import roomsReducer from "./rooms";

const chatReducers = combineReducers({
    messagesState: messagesReducer,
    usersState: usersReducer,
    roomsState: roomsReducer
});

export default chatReducers;